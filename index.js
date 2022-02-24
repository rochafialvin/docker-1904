const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const app = express();
const port = 2022;

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World");
});

app.get("/console", (req, res) => {
  console.log("Route console telah diakses");
  res.send("Lihat terminal");
});

app.post("/files", async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const fileName = `${title.toLowerCase()}.txt`;
    const filePath = `./public/${fileName}`;

    await fs.writeFile(filePath, body);

    res.send({
      status: "SUCCESS",
      message: `New file : ${fileName}`,
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.send({
    status: "ERROR",
    message: err.message,
  });
});

app.listen(port, () => console.log(`Sever is running at ${port}`));
