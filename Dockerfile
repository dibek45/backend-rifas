FROM node:18
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .  
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main.js"]
