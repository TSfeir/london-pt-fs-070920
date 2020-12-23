const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const express = require("express");
const app = express();
const connectionUrl = `mongodb+srv://thomas:xxxxx@cluster0.lb3zw.mongodb.net/usersDB?retryWrites=true&w=majority
`;
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const saltRounds = 10;
const port = 3100;

app.use(express.json());

let db;

const checkPassword = (password) => {
  return !!password.match(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{6,}$/
  );
};

const isValidPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

MongoClient.connect(
  connectionUrl,
  { retryWrites: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to your DB");
    }
    db = client.db("usersDB");
  }
);

app.get("/users", (req, res) => {
  const collection = db.collection("users");
  collection.find({}).toArray((error, users) => {
    res.send(users);
  });
});

app.post("/user/signup", (req, res) => {
  const collection = db.collection("users");
  const myPlaintextPassword = req.body.password;

  if (checkPassword(myPlaintextPassword) === false) {
    res.status(400).send("Password does not match requirements");
  } else {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        collection.insertOne(
          {
            userName: req.body.userName,
            email: req.body.email,
            password: hash,
          },
          (error, result) => {
            if (error) {
              res.send(`There was an error`, error);
            } else {
              res.send(`User added.`);
            }
          }
        );
      });
    });
  }
});

app.post("/user/login", async (req, res) => {
  const collection = db.collection("users");
  const { userName, password } = req.body;
  collection.find({}).toArray(async (error, users) => {
    const selectedUser = users.find((user) => user.userName === userName);
    if (await isValidPassword(password, selectedUser.password)) {
      res.status(200).send("Logged in successfully.");
    } else {
      res.status(403).send("Invalid password or username.");
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
