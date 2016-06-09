module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/pgci'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
