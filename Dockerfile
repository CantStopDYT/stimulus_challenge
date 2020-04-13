### STAGE 1: Build ###
FROM node:12.16.2 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.9
COPY --from=build /usr/src/app/dist/stimulus-challenge /usr/share/nginx/html