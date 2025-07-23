# 👷 Build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

# 🧠 Solo copia lo que necesites
COPY prisma ./prisma
COPY src ./src
COPY nest-cli.json tsconfig.build.json tsconfig.json ./

RUN npm run build && npx prisma generate

# 🚀 Final image
FROM node:18-slim
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main"]
