# Anastasiia Beliakova Library

The repository contains sources of the Anastasiia Beliakova Library website (the [mkdocs](https://www.mkdocs.org/) project). You can build and run the website from this repository locally. If you have [Docker](https://www.docker.com/) installed, there's no need to install and configure mkdocs.

1. Build the `beliakova-literature` Docker image from the [Containerfile](./Containerfile):

   ```cli
   docker build -t lib-beliakova -f Containerfile .
   ```

2. Build the content and start the development server within the container:

   ```cli
   docker run --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova
   ```

3. Navigate to http://localhost:8000/ in your web browser.

You can edit markdown files from the `docs` folder and the website content will be rebuilt each time you save changes. When you are done, press `Ctrl`+`C` to stop the container with the development server. Next time  you can start from the third step, as the `lib-beliakova` is already build. However, you may need to rebuild the image if you have changes in the [Containerfile](./Containerfile) or [requirements.txt](./requirements.txt) files.
