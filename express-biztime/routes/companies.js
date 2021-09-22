const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    // Results is a SQL string
    const results = await db.query(`SELECT * FROM companies`);
    return res.json({ companies: results.rows });
  } catch (e) {
    return next(e);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const { type } = req.query;
    const results = await db.query(`SELECT * FROM companies WHERE type=$1`, [
      type,
    ]);

    return res.json(results.rows);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
