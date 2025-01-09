from flask import Flask
from threading import Timer
# TODO: ADJUST IMPORTS (files will be in "assets!")
from watcher import watch, start_watcher
from static import static
import webbrowser
import datetime
import logging
import os

# the host and port to which the server should be bound
HOST = '127.0.0.1'
PORT = 8080

# ANSI color codes for use on the terminal
TERMINAL_YELLOW = '\033[93m'
TERMINAL_RESET = '\033[0m'


def _flask_started():
    """
    Gets called once flask has (hopefully) started and opens the hosted site inside the users browser.
    Additionally the user gets notified how the script can be terminated and the watch capabilities of the site.
    """

    # Open the browser once the app is started
    webbrowser.open_new_tab(f'http://{HOST}:{PORT}')

    # Remind how to exit the script
    print(
        f'\n{TERMINAL_YELLOW}🚪 Press STRG + C to exit this script!{TERMINAL_RESET}')

    # Tell about file watcher
    print('   The website will automatically reload, once you make changes to the local files.')
    print('   (Do not open the page in multiple tabs though!)\n')


def main():
    """
    Main function of the entire server that bootstraps the flask app and starts the file watcher.
    """

    # create the app
    app = Flask(__name__)

    # configure the flask apps "constants"
    app.config['static_folder'] = os.path.abspath(os.path.join(
        os.path.dirname(__file__), os.pardir))  # os.path.dirname(__file__)
    app.config['server_start'] = datetime.datetime.now().isoformat()

    # add our two blueprints
    app.register_blueprint(watch)
    app.register_blueprint(static)

    # start the file watcher
    start_watcher(folder=app.config['static_folder'])

    # disable flask's logger so students don't get confused
    logging.getLogger('werkzeug').disabled = True

    # wait a bit before calling so flask can start
    Timer(1, _flask_started).start()

    # and run flask locally
    app.run(host=HOST, port=PORT, debug=False, threaded=True)


if __name__ == '__main__':
    main()
