import knex from "knex";

const knexInstance = knex({
  client: process.env.DB_CLIENT || "postgresql",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "CH_5_ORM",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123123",
  },
});

export default knexInstance;
