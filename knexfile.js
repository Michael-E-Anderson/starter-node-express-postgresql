// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {

  development: {
    client: 'protresqlsqlite3',
    connection: DATABASE_URL,
  }
};
