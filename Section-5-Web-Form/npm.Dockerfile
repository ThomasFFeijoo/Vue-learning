FROM node:alpine

RUN npm install -g @vue/cli

WORKDIR /src

COPY ./web-form .