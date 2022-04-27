FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV=production
RUN npm install -g @nestjs/cli

ADD ./. /app

RUN npm ci

RUN nest build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]