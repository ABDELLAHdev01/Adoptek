FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/aftasproject /usr/share/nginx/html


EXPOSE 80