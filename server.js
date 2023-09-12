import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title: title,
    description: description,
    duration: duration,
  });
  return reply.status(201).send();
});

server.get("/videos", () => {
  const videos = database.list();

  return videos;
});

server.put("/videos/:id", () => {
  return "hello Node.Js!";
});

server.delete("/videos/:id", () => {
  return "hello Node.Js!";
});

server.listen({
  port: 3333,
});
