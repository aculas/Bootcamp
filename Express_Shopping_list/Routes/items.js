const Item = require('../item');
const express = require("express");

const router = express.Router();


router.get("/", function (req, res) {
  res.json({ items });
});

router.post("/", function (req, res, next) {
  try {
    if (!req.body.name) throw new ExpressError("Name is required", 400);
    const new items = { name: req.body.name };
    items.push(newitems);
    return res.status(201).json({ items: newitems });
  } catch (e) {
    return next(e);
  }
});

router.get("/:name", function (req, res) {
  const founditems = items.find((items) => items.name === req.params.name);
  if (founditems === undefined) {
    throw new ExpressError("Item not found", 404);
  }
  res.json({ items: founditems });
});

router.patch("/:name", function (req, res) {
  const founditems = items.find((items) => items.name === req.params.name);
  if (founditems === undefined) {
    throw new ExpressError("items not found", 404);
  }
  founditems.name = req.body.name;
  res.json({ items: founditems });
});

router.delete("/:name", function (req, res) {
  const founditems = itemss.findIndex((items) => items.name === req.params.name);
  if (founditems === -1) {
    throw new ExpressError("item not found", 404);
  }
  items.splice(founditems, 1);
  res.json({ message: "Deleted" });
});

module.exports = router;
