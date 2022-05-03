process.env.NODE_ENV = "test";
// there are three processes to run -development, production and test
const request = require("supertest");

const app = require("../app");

let items = require("../fakeDb");

let item = { name: "food", price: 300 };

beforeEach(async () => {
  items.push(item);
});

afterEach(async () => {
  // make sure this *mutates*, not redefines,
  items.length = 0;
});

// Get/Items and returns the object {items: [item, ...]}

describe("GET /items", () => {
  test("Get a list of all items", async () => {
    const res = await request(app).get(`/items`);
    const { items } = res.body;
    expect(res.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});

// Get/ items/[name] - this returns data about 1 item {item: item}

describe("GET /items/:name", () => {
  test("Get items by name", async () => {
    const res = await request(app).get(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toEqual(item);
  });

  test("Responds with 404 for invalid item", async () => {
    const res = await request(app).get(`/items/0`);
    expect(res.statusCode).toBe(404);
  });
});

// POST /items - create items from data

describe("POST /items", () => {
  test("Creates a new item", async () => {
    const res = await request(app)
      .post(`/items`)
      .send({ name: "Cheese", price: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toHaveProperty("name");
    expect(res.body.item).toHaveProperty("price");
    expect(res.body.item.name).toEqual("Cheese");
    expect(res.body.item.price).toEqual(0);
  });
});

// PATCH /items [name] -updates item and returns {item: item}

describe("/PATCH /items/:name", () => {
  test("Updates a single item", async () => {
    const res = await request(app).patch(`/items/${item.name}`).send({
      name: "Sloth",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toEqual({
      name: "Sloth",
    });
  });
  test("Responds with 404 if it can't find item", async () => {
    const res = await request(app).patch(`/items/0`);
    expect(res.statusCode).toBe(404);
  });
});

// DELETE/items[name] deletes an item and returns {message: item deleted}

describe("/DELETE /item/:name", () => {
  test("Deletes a single item", async () => {
    const res = await request(app).delete(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
});
