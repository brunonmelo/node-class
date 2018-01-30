const pgp = require('pg-promise')();

const cn = {
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'casadocodigo'
};

function getDb() {
    return pgp(cn);
}

module.exports = () => {
    return getDb
};