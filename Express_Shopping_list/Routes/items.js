const Item = require("../item");
const express = require("express");

const router = express.Router();

// GET / item returns [item, ...]

router.get("", (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch (e) {
    return next(e);
  }
});

//  POST / {name, price} returns a new-item
router.post("", (req, res, next) => {
  try {
    let newItem = new Item.find(req.body.name, req.body.price);
    return res.json({ item: newItem });
  } catch (e) {
    return next(e);
  }
});
//  GET /[name] returns item
router.get("/:name", (req, res) => {
  const founditems = Item.find((items) => items.name === req.params.name);
  if (founditems === undefined) {
    throw new ExpressError("Item not found", 404);
  }
  res.json({ items: founditems });
});
// PATCH /[name] returns item

router.patch("/:name", (req, res, next) => {
  try {
    let foundItem = Item.update(req.params.name, req.body);
    return res.json({ item: foundItem });
  } catch (e) {
    return next(e);
  }
});

// DELETE /[name] returns "Deleted"

router.delete("/:name", (req, res, next) => {
  try {
    Item.remove(req.params.name);
    return res.json({ message: "Deleted" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
