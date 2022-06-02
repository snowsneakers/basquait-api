const express = require("express");
const app = express();
const cors = require("cors");
const art = require("./artAPI.js");
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:year", (req, res) => {
  const year = req.params.year;
  art.artByYear[year] ? res.json(art.artByYear[year]) : res.json(art.artByYear["more"]);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
