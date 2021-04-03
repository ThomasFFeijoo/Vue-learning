FROM node:alpine

RUN npm install -g @vue/cli

WORKDIR /src

COPY ./reaction-timer .