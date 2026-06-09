FROM dhi.io/bun:1-alpine3.22

WORKDIR /app

COPY ./package.json ./bun.lock ./

RUN bun install

COPY . ./

EXPOSE 3000

CMD ["bun", "src/index.ts"]
