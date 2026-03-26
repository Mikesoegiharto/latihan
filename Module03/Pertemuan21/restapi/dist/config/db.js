import { Pool } from "pg";
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "gokasir",
    password: "M1ch4el96",
    port: 5432
});
export default pool;
//# sourceMappingURL=db.js.map