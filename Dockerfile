# 👷 Build stage
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY generated ./generated
COPY src ./src
COPY nest-cli.json tsconfig*.json ./

RUN npx prisma generate && npm run build

# 🚀 Final stage
FROM node:18-slim
WORKDIR /app

# Instalar OpenSSL 1.1.x (importante para Prisma)
RUN apt-get update && apt-get install -y openssl

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.prisma ./prisma-cache 
COPY --from=builder /app/.prisma/client ./node_modules/.prisma/client 

# 🧠 Re-generar Prisma en el entorno real
RUN npx prisma generate

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main"]
