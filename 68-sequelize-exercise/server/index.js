const express = require("express");
const app = express();
const { Sequelize, QueryTypes } = require("sequelize");
const port = 3000;

const sequelize = new Sequelize("store_db", "root", "xxxxx", {
  host: "localhost",
  dialect: "mysql",
  define: { timestamps: false },
});

app.use(express.json());

app.get("/api/users", async (req, res) => {
  if (req.query.lastName !== undefined) {
    const specificUser = await sequelize.query(
      `SELECT * FROM users WHERE lastName = ${JSON.stringify(
        req.query.lastName
      )}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send(specificUser);
  } else {
    const users = await sequelize.query("SELECT * FROM `users`", {
      type: QueryTypes.SELECT,
    });
    res.send(users);
  }
});

app.post("/api/users", async (req, res) => {
  const { firstName, lastName, age } = req.body;
  await sequelize.query(
    `INSERT INTO users (firstName, lastName, age) VALUES ("${firstName}", "${lastName}", "${age}");`,
    { type: QueryTypes.INSERT }
  );
  res.send("Saved.");
});

app.get("/api/user/:id", async (req, res) => {
  const userId = req.params.id;
  const userSearched = await sequelize.query(
    `SELECT * FROM users WHERE id = ${userId}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(userSearched);
});

app.patch("/api/user/:id", async (req, res) => {
  const userId = req.params.id;
  const queryString = Object.entries(req.body)
    .map((entry) => `${entry[0]}='${entry[1]}'`)
    .join(", ");

  await sequelize.query(
    `UPDATE users SET ${queryString} WHERE id = ${userId}`,
    { type: QueryTypes.UPDATE }
  );
  res.send(req.body);
});

app.delete("/api/user/:id", async (req, res) => {
  const userId = req.params.id;
  await sequelize.query(`DELETE FROM users WHERE id = ${userId}`, {
    type: QueryTypes.UPDATE,
  });
  res.send(userId);
});

app.get("/api/orders", async (req, res) => {
  if (req.query.userId !== undefined) {
    const ordersFromUser = await sequelize.query(
      `SELECT * FROM orders WHERE userId = ${req.query.userId}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send(ordersFromUser);
  } else {
    const orders = await sequelize.query("SELECT * FROM `orders`", {
      type: QueryTypes.SELECT,
    });
    res.send(orders);
  }
});

app.post("/api/orders", async (req, res) => {
  const { productName, quantity, userId } = req.body;
  await sequelize.query(
    `INSERT INTO orders (productName, quantity, userId) VALUES ("${productName}", "${quantity}", "${userId}");`,
    { type: QueryTypes.INSERT }
  );
  res.send("Saved.");
});

app.get("/api/order/:id", async (req, res) => {
  const orderId = req.params.id;
  const orderSearched = await sequelize.query(
    `SELECT * FROM orders WHERE id = ${orderId}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(orderSearched);
});

app.patch("/api/order/:id", async (req, res) => {
  const orderId = req.params.id;
  const queryString = Object.entries(req.body)
    .map((entry) => `${entry[0]}='${entry[1]}'`)
    .join(", ");

  await sequelize.query(
    `UPDATE orders SET ${queryString} WHERE id = ${orderId}`,
    { type: QueryTypes.UPDATE }
  );
  res.send(req.body);
});

app.delete("/api/order/:id", async (req, res) => {
  const orderId = req.params.id;
  await sequelize.query(`DELETE FROM users WHERE id = ${orderId}`, {
    type: QueryTypes.UPDATE,
  });
  res.send(orderId);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
