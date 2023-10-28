import { Elysia } from 'elysia';

const port = Number(Bun.env.PORT) || 3000;

const app = new Elysia().get('/', () => 'Hello Elysia').listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
