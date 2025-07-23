#!/bin/sh

echo "📦 Generating Prisma Client..."
npx prisma generate

echo "🚀 Starting NestJS backend..."
node dist/main
