FROM node:alpine

WORKDIR /src

RUN yarn global add @vue/cli
RUN yarn global add firebase-tools
RUN yarn add firebase