const users = [
  {
    id: 1,
    name: "Vasile",
  },
  {
    id: 2,
    name: "Sam",
  },
  {
    id: 3,
    name: "Alex",
  },
  {
    id: 4,
    name: "Tom",
  },
];

const http = require("http");
const url = require("url");
const port = 3000;
var fs = require("fs");

const createServer = () => {
  return http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if (pathname === "/") {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });

      res.end("Hello");
    }
    if (pathname === "/api/users") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(users));
    }
    if (pathname.includes(`/api/user/`)) {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      const userNumber = parseInt(pathname.substr(10, 1));
      res.end(JSON.stringify(users[userNumber - 1]));
    }
    if (pathname.includes(`/home`)) {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length,
        });
        res.write(data);
        res.end();
      });
    }
  });
};

const server = createServer();

server.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
