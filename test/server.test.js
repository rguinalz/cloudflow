const request = require("supertest");
const app = require("../src/server");

describe("CloudFlow API", () => {
  test("GET / should return application information", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.application).toBe("CloudFlow");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
