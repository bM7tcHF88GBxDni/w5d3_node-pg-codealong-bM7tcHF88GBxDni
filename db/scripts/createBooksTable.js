import { query } from "../index.js";

let sqlQuery = `CREATE TABLE books (id SERIAL PRIMARY KEY, title TEXT, author TEXT);`;

async function createBooksTable() {
    let response = await query(sqlQuery);

    console.log("The database server responded with: ", response);
}

createBooksTable();