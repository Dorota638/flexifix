FROM node:14.15.4-alpine3.10 AS base

WORKDIR /app

RUN apk update && apk add bash


COPY package*.json package-lock.json /app/

# COPY .env.example /app/.env.example
# COPY .env.test /app/.env.test

COPY dist /app/dist
COPY src /app/src

COPY tsconfig.json /app/tsconfig.json


COPY jest.config.js /app/jest.config.js

RUN npm ci 

RUN npm run migrate
RUN npm run seed

RUN npm build
CMD [ "npm", "start" ]