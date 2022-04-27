FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV=production
RUN npm install -g nestjs

ADD ./. /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]