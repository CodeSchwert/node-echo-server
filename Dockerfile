FROM node:8.11

WORKDIR /echoserver

COPY ./ /echoserver

RUN npm install

EXPOSE 6000

CMD npm start
