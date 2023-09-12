import { fastify } from "fastify";
import {DatabaseMemory} from './database-memory.JS'
const server = fastify();

server.post("/videos", () => {
  return "hello world!";
});  
server.get("/videos", () => {
  return "hello Pedro Grunwald!";
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
