import supertest from "supertest";
import web from "../applications/web";
import { logger } from "../applications/logging";
import { removeUser } from "./test-util";

describe("User", () => {
  beforeEach(async () => {
    await removeUser();
  });
  it("should register user", async () => {
    const result = await supertest(web).post("/api/register").send({
      username: "test",
      email: "test@gmail.com",
      password: "password",
      confPassword: "password",
    });
    logger.error(result.body);
    expect(result.status).toBe(201);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
  });
});
