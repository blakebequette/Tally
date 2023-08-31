FROM node:latest as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "server/index.cjs"]