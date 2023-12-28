const express = require("express");
const path = require("path");

const app = express();

const DESIRED_PORT = process.env.PORT ?? 1234;

app.use("/src", express.static(path.join(__dirname, "src")));

const processRequest = (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
};

app.get("/*", processRequest);

app.listen(DESIRED_PORT, () => console.log("server running"));
