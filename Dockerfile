FROM docker.arvancloud.ir/node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set registry https://mirror-npm.runflare.com

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
