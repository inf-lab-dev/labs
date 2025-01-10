from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer
from flask import Response, Blueprint
from queue import Queue, Empty
import threading
import time

# Create a blueprint to hook into Flask
watch = Blueprint('watch', __name__)

# The produced changes, noticed by the file-watcher.
_change_queue = Queue()


class _EnqueueFileChangeHandler(FileSystemEventHandler):
    """
    A `FileSystemEventHandler` that just puts any non-directory related events into
    the `_change_queue`. So this is the Producer of this Producer-Consumer-Pattern.
    """

    def on_any_event(self, event):
        """
        Processes any event.

        :param event: any event
        """

        if event.is_directory:
            return

        _change_queue.put(event.src_path)


def _watch_changes(folder):
    """
    Starts the file watcher at the given folder.

    :param folder: the folder that sould recursively being watched
    """

    # prepare watchdog
    event_handler = _EnqueueFileChangeHandler()
    observer = Observer()

    # start watchdog
    observer.schedule(event_handler, folder, recursive=True)
    observer.start()

    # allow the user to quit the program
    try:
        while True:
            time.sleep(1)

    except KeyboardInterrupt:
        observer.stop()

    # gracefully shutdown the observer
    observer.join()


@watch.route('/__watch')
def serve():
    """
    Serves the special `__watch` endpoint that is an `event-stream` that produces an event every
    time there is a new entry in the `_change_queue`. So this is the Consumer.
    """

    def stream():
        """
        Produces the stream, that will be sent to the (single!) user.
        """

        while True:
            try:
                changed_file = _change_queue.get(timeout=60)

                # notify about the change
                yield f"data: {changed_file}\n\n"

            except Empty:
                # if no value could be received in-time, we just wait a bit more
                yield f"data: keep-alive\n\n"

    # send the stream as response
    return Response(stream(), content_type='text/event-stream')


def start_watcher(folder):
    """
    Runs the `_watch_changes` function inside a seperate thread for the given folder, so it can
    run concurrently with flasks main thread.

    :param folder: The folder to watch.
    """

    watcher = threading.Thread(
        target=_watch_changes, args=(folder,), daemon=True)
    watcher.start()
