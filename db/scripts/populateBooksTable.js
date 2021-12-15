/* 
Plan
Import query
Import books

Create function to add each book to the database table
    For each book, send a query to insert it
*/
import { query } from "../index.js";
import books from "../../books-data.js";

async function populateBooksTable() {
    
    books.forEach( async (book) => { //for each book, send a query
        const title = book.title;
        const author = book.author;
    
        const res = await query(
            `INSERT INTO books (title, author) VALUES ($1, $2) RETURNING title`, //first parameter will be used by pool.query() as the SQL query that will be executed on the database
            [title, author] //second parameter will be used by pool.query() as the VALUES() we are inserting into the table with the SQL query
        );
        console.log(res); /* logging the response from the database server */
    });
    
}

populateBooksTable();