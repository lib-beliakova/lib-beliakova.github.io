# Anastasiia Beliakova Library

The repository contains sources of the [Anastasiia Beliakova Library](https://lib-beliakova.github.io/) website (the [mkdocs](https://www.mkdocs.org/) project). You can build and run the website from this repository locally. If you have [Docker](https://www.docker.com/) installed, there's no need to install and configure mkdocs.

## Build Docker image

Build the `lib-beliakova` Docker image from the [Containerfile](./Containerfile):

```cli
docker build -t lib-beliakova -f Containerfile .
```

You may need to rebuild the image if you have changes in the [Containerfile](./Containerfile) or [requirements.txt](./requirements.txt) files.

## Use development server for preview and editing

Start the local preview of the documentation:

1. Build the content and start the development server within the container:

   ```cli
   docker run --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova
   ```

2. Navigate to http://localhost:8000/ in your web browser.

You can edit markdown files from the `docs` folder and the website content will be rebuilt each time you save changes. When you are done, press `Ctrl`+`C` to stop the container with the development server.

## Build web site for publishing

To publish the documentation:

1. Build the content:

   ```cli
   docker run --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova build
   ```

2. Copy the `site` directory content to a production web server.

## DOCX files

To build DOCX files together with HTML, add `-e ENABLE_PANDOC='1'` to the `docker run` command:

```cli
docker run -e ENABLE_PANDOC='1' --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova
```

Or:

```cli
docker run -e ENABLE_PANDOC='1' --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova build
```

Links to DOCX files will be added at the bottom of each page.
