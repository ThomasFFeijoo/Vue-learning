FROM node:alpine

WORKDIR /src

COPY ./project-planner .

RUN npm install -g json-server