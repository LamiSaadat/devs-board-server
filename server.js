const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const boardsRoutes = require("./routes/boardsRoutes");
const palettesRoutes = require("./routes/palettesRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const keywordsRoutes = require("./routes/keywordsRoutes");

app.use("/boards", boardsRoutes);
app.use("/palettes", palettesRoutes);
app.use("/images", imagesRoutes);
app.use("/keywords", keywordsRoutes);

app.listen(PORT, () => {
  console.log(`🚀Listening on port ${PORT}`);
});

module.exports.handler = serverless(app);
