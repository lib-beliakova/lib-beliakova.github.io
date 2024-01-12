# Anastasiia Beliakova Library

The repository contains sources of the [Anastasiia Beliakova Library](https://lib-beliakova.github.io/) website (the [mkdocs](https://www.mkdocs.org/) project). You can build and run the website from this repository locally. If you have [Docker](https://www.docker.com/) installed, there's no need to install and configure mkdocs.

1. Build the `lib-beliakova` Docker image from the [Containerfile](./Containerfile):

   ```cli
   docker build -t lib-beliakova -f Containerfile .
   ```

2. Build the content and start the development server within the container:

   ```cli
   docker run --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova
   ```

3. Navigate to http://localhost:8000/ in your web browser.

## DOCX files

To build DOCX files together with HTML, use the following command:

```
docker run -e ENABLE_PANDOC='1' --rm -itp 8000:8000 -v "$(pwd):/d" lib-beliakova
```

Links to DOCX files will be added at the bottom of each page.
