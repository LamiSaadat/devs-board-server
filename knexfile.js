require("dotenv").config({ path: "./.env" });

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: "devsboard_database",
    charset: "utf8",
  },
};
