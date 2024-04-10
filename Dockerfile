FROM node:20.10-alpine
WORKDIR /app
ARG NODE_ENV=production
COPY ./package*.json /app
RUN npm install
COPY ./src /app/src
CMD [ "npm","run","start" ]