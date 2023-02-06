const Pool = require("pg").Pool;

const pool = new Pool({
    user: "sae_s3",
    host: "localhost",
    database: "bdd_sae_s3",
    password: "bdds3",
    port: "5432"
});

module.exports = pool;