FROM node:alpine

WORKDIR /src

COPY ./project-planner .

RUN yarn global add @vue/cli