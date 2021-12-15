import express from "express";
const router = express.Router();

import { getAllBooks, getBookById, getBooksByAuthor, getBooksByTitle } from "../models/books.js";

// GET all books
router.get("/", async (req, res) => {
  const { title, author } = req.query;

  if (title) {
    const searchResults = await getBooksByTitle(title); // test using http://localhost:3000/books?title=Clean+Code
    res.json({
      success: true,
      message: `Searched titles for ${title}`,
      payload: searchResults,
    });
    return;
  }

  if (author) {
    const authorResults = await getBooksByAuthor(author);

    res.json({
      success: true,
      message: `Searched for books by ${author}`,
      payload: authorResults
    });
    return;
  }

  const books = await getAllBooks();

  res.json({ success: true, message: `all books`, payload: books });
});

// GET specific book by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requestedBook = await getBookById(id); //test using http://localhost:3000/books/3
  res.json({
    success: true,
    message: `Found book ${id}`,
    payload: requestedBook,
  });
});

export default router;
