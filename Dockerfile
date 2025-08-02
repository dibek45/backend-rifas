# 👷 Build stage
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY nest-cli.json tsconfig*.json ./

RUN npm run build

# 🚀 Final stage
FROM node:18-slim
WORKDIR /app

RUN apt-get update && apt-get install -y openssl

# Copiar build y dependencias desde builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package*.json ./

# 👇 Copiar el script de arranque
COPY start.sh ./start.sh

# ⛳ Necesario para leer variables de entorno del docker-compose
ENV NODE_ENV=production

# 📢 Puerto expuesto por la app
EXPOSE 3000

CMD ["sh", "./start.sh"]
