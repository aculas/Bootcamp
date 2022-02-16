const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`I am ALIVE on http://localhost:${PORT}`));

app.get("/candy", (req, res) => {
  res.status(200).send({
    candy: "mars bar",
    price: "$3.00",
  });
});

app.post("/candy/:id", (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  if (!price) {
    res.status(418).send({ message: "We need a price!" });
  }
  res.send({
    candy: `with your price of ${price} and an ID of ${id}`,
  });
});
