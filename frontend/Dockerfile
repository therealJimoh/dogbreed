FROM node:18.9.0-alpine as build
WORKDIR /usr/app
COPY package.json /usr/app
COPY . /usr/app
RUN npm install
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html
