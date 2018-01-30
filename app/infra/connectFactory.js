const pgp = require('pg-promise')();

const cn = {
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'casadocodigo'
};

const db = pgp(cn);

module.exports = db;