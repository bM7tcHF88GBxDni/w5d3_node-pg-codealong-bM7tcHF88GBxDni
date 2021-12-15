import books from "../books-data.js";

export function getAllBooks() {
  return books;
}

export function getBookById(id) {
  return books.filter((book) => {
    return book.id.toString() === id;
  });
}

export function getBooksByTitle(title) {
  return books.filter((book) => {
    if (book.title.toLowerCase().includes(title.toLowerCase())) {
      return true;
    }
  });
}
