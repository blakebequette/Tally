FROM node:latest as builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY index.html .
COPY tsconfig*.json .
COPY vite.config.ts .

COPY ./public ./public
COPY ./src ./src

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY ./package.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY ./server ./server

EXPOSE 3000

CMD ["node", "server/index.cjs"]