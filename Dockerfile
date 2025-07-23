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

RUN apt-get update && apt-get install -y openssl

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main"]
