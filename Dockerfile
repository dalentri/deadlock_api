FROM oven/bun:canary-debian

WORKDIR /app

COPY ./package.json ./bun.lock ./

RUN bun install

COPY . ./

EXPOSE 3000

CMD ["bun", "src/index.ts"]
