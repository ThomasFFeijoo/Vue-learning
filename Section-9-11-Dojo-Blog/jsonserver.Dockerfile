FROM node:alpine

WORKDIR /src

COPY ./dojo-blog .

RUN npm install -g json-server