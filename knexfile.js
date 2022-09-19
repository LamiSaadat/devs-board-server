require("dotenv").config({ path: "./.env" });

const connections = {
  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PSWD,
      database: "devsboard_database",
      charset: "utf8",
    },
  },
  production: {
    client: "mysql",
  },
};

module.exports =
  process.env.NODE_ENV === "production"
    ? connections.production
    : connections.development;
