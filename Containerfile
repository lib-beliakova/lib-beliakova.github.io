FROM docker.io/library/python:alpine
WORKDIR /tmp
COPY ./requirements.txt .
RUN apk add --update --no-cache --virtual .build-deps gcc musl-dev &&\
    apk add --no-cache git ca-certificates curl &&\
    pip install --no-cache-dir --requirement ./requirements.txt &&\
    apk del .build-deps &&\
    rm ./requirements.txt
WORKDIR /d
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
