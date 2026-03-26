import {Pool} from 'pg';

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "api",
    password: "M1ch4el96",
    port: 5432,
});

export default pool;