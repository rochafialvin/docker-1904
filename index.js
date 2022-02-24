const express = require("express");
const cors = require("cors");
const app = express();
const port = 2022;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello World");
});

app.get("/console", (req, res) => {
  console.log("Route console telah diakses");
  res.send("Lihat terminal");
});

app.listen(port, () => console.log(`Sever is running at ${port}`));
