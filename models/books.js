import books from "../books-data.js";
import { query } from "../db/index.js";

export async function getAllBooks() {
  //here we want to retrieve data from the database server
  return await query(`SELECT * FROM books;`);

  //return books;
}

export async function getBookById(id) {
  return await query(
    `SELECT * FROM books WHERE id = $1;`,
    [id]
  );

  // return books.filter((book) => {
  //   return book.id.toString() === id;
  // });
}

export async function getBooksByTitle(title) {
  return await query(
    `SELECT * FROM books WHERE title = $1;`,
    [title]
  );

  // return books.filter((book) => {
  //   if (book.title.toLowerCase().includes(title.toLowerCase())) {
  //     return true;
  //   }
  // });
}
