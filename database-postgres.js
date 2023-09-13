import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title ilike "%${search}%"`;
    } else {
      videos = await sql`select * from videos`;
    }
    return videos
  }

  create(video) {
  
  }

  update(id, video) {}

  delete(id) {}
}
