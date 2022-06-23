const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const boardsRoutes = require("./routes/boardsRoutes");

//all boards route
app.use("/boards", boardsRoutes);

app.listen(PORT, () => {
  console.log(`🚀Listening on port ${PORT}`);
});
