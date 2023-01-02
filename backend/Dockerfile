FROM node:18.9.0-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install --only=production && npm cache clean --force
EXPOSE 80
CMD node index.js