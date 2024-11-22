#!/usr/local/bin/python3

#
# Cool, you are interested in python?
# After the entire module, you might be able to write some of this file's content on your own!
#
# Currenty you do not have to understand ANYTHING thats written inside this file.
# However, if you have any questions on it's content, I'm happy to answer them.
#

import os
import base64
import urllib.request
import http.cookiejar
from PIL import Image

# ANSI color codes for use on the terminal
TERMINAL_RED = '\033[31m'
TERMINAL_GREEN = '\033[32m'
TERMINAL_YELLOW = '\033[33m'
TERMINAL_BLUE = '\033[34m'
TERMINAL_RESET = '\033[0m'

# some decently new user agent to not get blocked by CDNs
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'


def success(message):
    print(f'{TERMINAL_GREEN}✅ {message}{TERMINAL_RESET}')


def error(message):
    print(f'{TERMINAL_RED}❌ {message}{TERMINAL_RESET}')


def info(message):
    print(f'{TERMINAL_BLUE}ℹ️ {message}{TERMINAL_RESET}')


def download_image(url, filename):
    try:
        # user probably copied something off google images directly
        if url.startswith('data:image/'):
            info(f'Downloading from data URL...')

            # get actual base64 encoded data
            data = url.split(',')[1]
            image = base64.b64decode(data)

            with open(filename, 'wb') as f:
                f.write(image)

            success(f'Downloaded data URL as "{filename}"')

        # user did pass an actual url
        else:
            info(f'Downloading from "{url}"...')

            request = urllib.request.Request(url)

            # support cookies to not get blocked by some image CDNs
            cookie_jar = http.cookiejar.CookieJar()
            opener = urllib.request.build_opener(
                urllib.request.HTTPCookieProcessor(cookie_jar))

            # use user-agent to not get blocked by cdns
            request.add_header('User-Agent', USER_AGENT)

            with opener.open(request) as response:
                with open(filename, 'wb') as f:
                    f.write(response.read())

            success(f'Downloaded URL as "{filename}"')

    except Exception as e:
        error(f'Could not download image at "{url}": {e}')


def convert_to_bmp(input_file, output_file):
    try:
        # open the input image file
        with Image.open(input_file) as img:
            # ensure the image is in RGB mode (24-bit)
            img = img.convert('RGB')

            # Save as 24-bit uncompressed BMP
            img.save(output_file, format='BMP')

            success(f'Successfully converted "{output_file}"!')
    except Exception as e:
        error(f'Could not convert "{output_file}": {e}')


def main():
    print(f'{TERMINAL_BLUE}🎉 Download images as BMP!\n{TERMINAL_RESET}')

    while True:
        # ask the user for input
        target = input(
            f'{TERMINAL_YELLOW}👉 Enter URL (press Enter to quit): {TERMINAL_RESET}\n')

        if len(target.strip()) == 0:
            print(f'{TERMINAL_BLUE}👋  Godbye!{TERMINAL_RESET}')
            break

        # if input is a URL
        if target.startswith('data:image/') or target.startswith('http'):

            # get filename from url if it has query parameters
            filename = './images/' + target.split('/')[-1].split('?')[0]

            download_image(target, filename)

        # otherwise
        else:
            error(
                'Could not determine what you want to download or convert, please try again.')
            continue

        # convert the filename to bmp
        bmp_filename = filename.rsplit('.', 1)[0] + '.bmp'

        # convert the actual file to BMP
        convert_to_bmp(filename, bmp_filename)

        # remove the converted fil
        os.remove(filename)


if __name__ == '__main__':
    main()
