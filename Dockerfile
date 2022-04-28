FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV=development
RUN npm install -g @nestjs/cli

ADD ./. /app

RUN npm install

RUN nest build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]