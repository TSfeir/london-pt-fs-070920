const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const express = require("express");
const app = express();
const connectionUrl = `mongodb+srv://thomas:xxxxxx@cluster0.lb3zw.mongodb.net/usersDB73?retryWrites=true&w=majority
`;
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

let db;

MongoClient.connect(
  connectionUrl,
  { retryWrites: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to your DB");
    }
    db = client.db("usersDB73");
  }
);

app.get("/users", (req, res) => {
  const collection = db.collection("users");
  collection.find({}).toArray((error, users) => {
    res.send(users);
  });
});

app.post("/users", (req, res) => {
  const collection = db.collection("users");
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      res.send(`There was an error`, error);
    } else {
      res.send(req.body);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
