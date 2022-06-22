const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
