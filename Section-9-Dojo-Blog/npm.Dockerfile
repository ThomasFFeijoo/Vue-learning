FROM node:alpine

WORKDIR /src

COPY ./dojo-blog .

RUN yarn global add @vue/cli