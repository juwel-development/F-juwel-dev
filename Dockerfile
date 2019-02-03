FROM node:10-alpine as base

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM base as production
WORKDIR /usr/src/app

COPY . .