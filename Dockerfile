# syntax=docker/dockerfile:1

FROM node:16.17.0

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "index.astro"]