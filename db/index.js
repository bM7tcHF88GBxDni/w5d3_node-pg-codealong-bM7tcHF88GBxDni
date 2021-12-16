import  pg  from 'pg'; //import postgres
import { dbCredentials } from "../config.js";

const pool = new pg.Pool({
    user: dbCredentials.user,
    host: dbCredentials.host,
    database: dbCredentials.database,
    password: dbCredentials.password,
    port: dbCredentials.port,
    ssl: {rejectUnauthorized: false }
});

export function query(text, params) {/* we dont use the optional third callback parameter, which means this exported function will return a promise because we are not dealing with it here in a callback */
    return pool.query(text, params);
}