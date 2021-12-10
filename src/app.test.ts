import * as request from "supertest";
import { app } from "./app";

describe("Tasks API", () => {
  it("GET /task --> array tasks", () => {
    return request(app)
      .get("/task")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              content: expect.any(String),
              createdAt: expect.any(Date),
              author: expect.any(String),
            }),
          ])
        );
      });
  });

  it("GET /task/id --> specific task by id", () => {
    return request(app)
      .get("/task/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            content: expect.any(String),
            createdAt: expect.any(Date),
            author: expect.any(String),
          })
        );
      });
  });

  it("POST /task --> created task", () => {});
});
