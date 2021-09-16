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
// Get/Items and returns the object {items: [item, ...]}
describe("GET /items", async () => {
  test("Get a list of all items", async () => {
    const res = await request(app).get("/items");
    const { items } = response.body;
    expect(res.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});
// Get/ items/[name] - this returns data about 1 item {item: item}
describe("GET /items/:name", async () => {
  test("Get items by name", async () => {
    const res = await request(app).get(`/items/${items.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: pickles });
  });
  test("Responds with 404 for invalid items", async () => {
    const res = await request(app).get(`/items/0`);
    expect(res.statusCode).toBe(404);
  });
});
// POST /items - create items from data
describe("POST /items", async () => {
  test("Creates a new item", async () => {
    const res = await request(app)
      .post("/items")
      .send({ name: "Cheese", price: 0 });
    expect(res.statusCode).toBe(200);
    expect(response.body.item).toHaveProperty("name");
    expect(response.body.item).toHaveProperty("price");
    expect(response.body.item.name).toEqual("Cheese");
    expect(response.body.item.price).toEqual(0);
  });
  test("Responds with 400 if item is missing", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.statusCode).toBe(400);
  });
});

// PATCH /items [name] -updates item and returns {item: item}
describe("/PATCH /items/:name", async () => {
  test("Updating a items' name", async () => {
    const res = await request(app)
      .patch(`/itemss/${item.name}`)
      .send({ name: "Sloth" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: { name: "Monster" } });
  });
  test("Responds with 404 if it can't find item", async () => {
    const res = await request(app).patch(`/itemss/0`).send({ name: "Sloth" });
    expect(res.statusCode).toBe(404);
  });
});
// DELETE/items[name] deletes an item and returns {message: item deleted}
describe("/DELETE /item/:name", async () => {
  test("Deleting a item", async () => {
    const res = await request(app).delete(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
  test("Responds with 404 for deleting invalid items", async () => {
    const res = await request(app).delete(`/items/car`);
    expect(res.statusCode).toBe(404);
  });
});
