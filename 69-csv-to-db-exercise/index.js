const fs = require("fs");
const csv = require("@fast-csv/parse");

const cities = csv
  .parseFile("/Users/thomassfeir/Desktop/cities.csv", { headers: true })
  .on("error", (error) => console.error(error))
  .on("data", (row) => console.log(`ROW=${JSON.stringify(row)}`))
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));

console.log(cities);
