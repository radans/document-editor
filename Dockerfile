FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN cd vue_application && npm install && npm run build

RUN cd /app

RUN npm install
EXPOSE 3000
CMD ["node", "./bin/www"]
