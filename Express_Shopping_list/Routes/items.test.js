process.env.NODE_ENV = "test";
// there are three processes to run -development, production and test
const request = require("supertest");

const app = require("../app");

let items = require("../fakeDb");

let item = { name: "food", price: 300 };

beforeEach(function () {
  items.push(item);
});

afterEach(function () {
  // make sure this *mutates*, not redefines,
  items.length = 0;
});

describe("GET /items", () => {
  test("Get a list of all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});

describe("GET /items/:name", () => {
  test("Get items by name", async () => {
    const res = await request(app).get(`/items/${items.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: pickles });
  });
  test("Responds with 404 for invalid items", async () => {
    const res = await request(app).get(`/items/icecube`);
    expect(res.statusCode).toBe(404);
  });
});

describe("POST /items", () => {
  test("Creating a items", async () => {
    const res = await request(app).post("/items").send({ name: "Blue" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ items: { name: "Blue" } });
  });
  test("Responds with 400 if name is missing", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.statusCode).toBe(400);
  });
});

describe("/PATCH /items/:name", () => {
  test("Updating a items' name", async () => {
    const res = await request(app)
      .patch(`/itemss/${pickles.name}`)
      .send({ name: "Monster" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: { name: "Monster" } });
  });
  test("Responds with 404 for invalid name", async () => {
    const res = await request(app)
      .patch(`/itemss/Piggles`)
      .send({ name: "Monster" });
    expect(res.statusCode).toBe(404);
  });
});

describe("/DELETE /item/:name", () => {
  test("Deleting a item", async () => {
    const res = await request(app).delete(`/itemss/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
  test("Responds with 404 for deleting invalid items", async () => {
    const res = await request(app).delete(`/itemss/hamface`);
    expect(res.statusCode).toBe(404);
  });
});
