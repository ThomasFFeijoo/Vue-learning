FROM node:alpine

WORKDIR /src

COPY ./ninja-jobs .

RUN npm install -g json-server