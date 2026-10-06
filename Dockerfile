FROM node:24-alpine

LABEL org.opencontainers.image.source="https://github.com/rguinalz/cloudflow"

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src

EXPOSE 3000

CMD ["node", "src/server.js"]
