import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "123123",
      port: 5432,
      database: "CH_5_ORM",
    },
  },
};

module.exports = config;
