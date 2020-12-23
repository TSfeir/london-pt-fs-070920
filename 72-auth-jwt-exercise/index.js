const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const express = require("express");
const app = express();
const connectionUrl = `mongodb+srv://thomas:xxxxx@cluster0.lb3zw.mongodb.net/usersDB?retryWrites=true&w=majority
`;
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const SECRET_KEY = "tiorjo54i5wo5ewjlfjr545jlwhjlh@eorieurldfjhs!";
const saltRounds = 10;
const port = 3100;

app.use(express.json());
app.use(express.urlencoded());

let db;

const checkPassword = (password) => {
  return password.match(
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

app.post("/signup", (req, res) => {
  const collection = db.collection("users");
  console.log(req.body);
  const { password } = req.body;

  if (!checkPassword(password)) {
    return res
      .status(400)
      .json({ errorMessage: "Password does not match requirements" });
  }

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
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
            console.log("User added.");
            return res.redirect(`http://localhost:5000`);
          }
        }
      );
    });
  });
});

app.post("/login", async (req, res) => {
  const collection = db.collection("users");
  const { userName, password } = req.body;
  collection.find({}).toArray(async (error, users) => {
    const selectedUser = users.find((user) => user.userName === userName);
    if (await isValidPassword(password, selectedUser.password)) {
      res
        .status(200)
        .send({ token: jwt.encode({ userName, password }, SECRET_KEY) });
    } else {
      res.status(403).json({ errorMessage: "Invalid password or username." });
    }
  });
});

app.post("/tokenVerification", async (req, res) => {
  const { userName, password } = jwt.decode(req.body.token, SECRET_KEY);
  if (userName && password) {
    const collection = db.collection("users");
    collection.find({}).toArray(async (error, users) => {
      const selectedUser = users.find((user) => user.userName === userName);
      if (await isValidPassword(password, selectedUser.password)) {
        res.status(200).send("Authorised");
      } else {
        res.status(500).send("Unauthorised");
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
