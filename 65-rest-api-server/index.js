const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3001;
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

app.get("/users/", (req, res) => {
  const users = fs.readFileSync(`./db/users.json`);
  const usersJson = JSON.parse(users);

  res.json(usersJson);
});

app.post("/users/", (req, res) => {
  const users = fs.readFileSync(`./db/users.json`);
  const usersJson = JSON.parse(users);
  const newId = usersJson.length;
  const newUniqueId = uuidv4();
  const newUser = req.body;
  newUser.idUnique = newUniqueId;
  newUser.id = newId;
  const newUserDatabase = [...usersJson, newUser];
  const userDataString = JSON.stringify(newUserDatabase);
  fs.writeFileSync(`./db/users.json`, userDataString);
  res.send(newUser);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const users = fs.readFileSync(`./db/users.json`);
  const usersJson = JSON.parse(users);
  const matchedUser = usersJson.find((user) => user.id == userId);

  res.json(matchedUser);
});

app.patch("/user/:id", (req, res) => {
  const userNewParams = req.body;
  const userId = parseInt(req.params.id);
  const users = fs.readFileSync(`./db/users.json`);
  const usersJson = JSON.parse(users);
  const selectedUserIndex = usersJson.findIndex((user) => user.id === userId);
  usersJson[selectedUserIndex] = {
    ...usersJson[selectedUserIndex],
    ...userNewParams,
  };
  console.log(usersJson);
  const updatedUsers = JSON.stringify(usersJson);
  fs.writeFileSync(`./db/users.json`, updatedUsers);
  res.json(usersJson[selectedUserIndex]);
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const users = fs.readFileSync(`./db/users.json`);
  const usersJson = JSON.parse(users);
  const usersExclDeletedOne = usersJson.filter((user) => user.id !== userId);
  const usersExclDeletedOneString = JSON.stringify(usersExclDeletedOne);
  fs.writeFileSync(`./db/users.json`, usersExclDeletedOneString);
  res.send(req.params.id);
});

app.get("/orders", (req, res) => {
  if (req.query.userId !== undefined) {
    console.log(req.query.userId);
    const userId = parseInt(req.query.userId);
    const orders = fs.readFileSync(`./db/orders.json`);
    const ordersJson = JSON.parse(orders);
    const ordersFromUser = ordersJson.filter(
      (order) => order.userId === userId
    );

    res.json(ordersFromUser);
  } else {
    const orders = fs.readFileSync(`./db/orders.json`);
    const ordersJson = JSON.parse(orders);
    res.send(ordersJson);
  }
});

app.post("/orders/", (req, res) => {
  const orders = fs.readFileSync(`./db/orders.json`);
  const ordersJson = JSON.parse(orders);
  const newId = uuidv4();
  const newOrder = req.body;
  newOrder.id = newId;
  const newOrdersDatabase = [...ordersJson, newOrder];
  const orderDataString = JSON.stringify(newOrdersDatabase);
  fs.writeFileSync(`./db/orders.json`, orderDataString);
  res.json(newOrder);
});

app.get("/order/:id", (req, res) => {
  const orderId = req.params.id;
  const orders = fs.readFileSync(`./db/orders.json`);
  const ordersJson = JSON.parse(orders);
  const matchedOrder = ordersJson.find((order) => order.id == orderId);
  res.json(matchedOrder);
});

app.patch("/order/:id", (req, res) => {
  const orderNewParams = req.body;
  console.log(req.params);
  const orderId = req.params.id;
  const orders = fs.readFileSync(`./db/orders.json`);
  const ordersJson = JSON.parse(orders);

  const selectedOrderIndex = ordersJson.findIndex(
    (order) => order.id === orderId
  );

  ordersJson[selectedOrderIndex] = {
    ...ordersJson[selectedOrderIndex],
    ...orderNewParams,
  };
  const updatedOrders = JSON.stringify(ordersJson);
  fs.writeFileSync(`./db/orders.json`, updatedOrders);
  res.json(ordersJson[selectedOrderIndex]);
});

app.delete("/order/:id", (req, res) => {
  const orderId = req.params.id;
  const orders = fs.readFileSync(`./db/orders.json`);
  const ordersJson = JSON.parse(orders);
  const ordersExclDeletedOne = ordersJson.filter(
    (order) => order.id !== orderId
  );
  const ordersExclDeletedOneString = JSON.stringify(ordersExclDeletedOne);
  fs.writeFileSync(`./db/orders.json`, ordersExclDeletedOneString);
  res.json(req.params.id);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
