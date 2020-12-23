const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "xxxxxx",
  database: "store_db",
});

app.get("/api/users", (req, res) => {
  if (req.query.lastName !== undefined) {
    connection.query(
      `SELECT * FROM users WHERE lastName = ${JSON.stringify(
        req.query.lastName
      )}`,
      function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  } else {
    connection.query("SELECT * FROM users", function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  }
});

app.post("/api/users", (req, res) => {
  const { firstName, lastName, age } = req.body;
  connection.query(
    `INSERT INTO users (firstName, lastName, age) VALUES ("${firstName}", "${lastName}", "${age}");`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("Saved.");
    }
  );
});

app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  connection.query(
    `SELECT * FROM users WHERE id = ${userId}`,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.patch("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const queryString = Object.entries(req.body)
    .map((entry) => `${entry[0]}='${entry[1]}'`)
    .join(", ");

  connection.query(
    `UPDATE users SET ${queryString} WHERE id = ${userId}`,
    function (err, result) {
      if (err) throw err;
      res.json(req.body);
    }
  );
});

app.delete("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  connection.query(
    `DELETE FROM users WHERE id = ${userId}`,
    function (error, results, fields) {
      if (error) throw error;
      res.json(userId);
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
