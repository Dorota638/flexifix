FROM node:16.19.0-alpine3.17 AS base

WORKDIR /app

RUN apk update && apk add bash

COPY package.json /app/package.json
COPY src /app/src
COPY .sequelizerc /app/.sequelizerc
COPY tsconfig.json /app/tsconfig.json

RUN npm install

RUN npm run make

# RUN npm build

CMD [ "npm", "start" ]