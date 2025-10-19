FROM docker.arvancloud.ir/node:18-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm config set registry https://mirror-npm.runflare.com

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build


FROM docker.arvancloud.ir/node:18-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app ./

EXPOSE 3000
