const request = require("supertest");
const app = require("../src/server");

describe("CloudFlow API", () => {
  test("GET / deve retornar informações da aplicação", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.application).toBe("CloudFlow");
    expect(response.body.message).toBe("API running successfully");
  });

  test("GET /health deve retornar status healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
