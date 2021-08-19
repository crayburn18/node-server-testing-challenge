// Update with your config settings.

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/people.db3'
      },
      useNullAsDefault: true, // sqlite specific
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      }
    },
  };