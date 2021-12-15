import express from "express";
const router = express.Router();

import { getAllBooks, getBookById, getBooksByTitle } from "../models/books.js";

// GET all books
router.get("/", (req, res) => {
  const { title, author } = req.query;

  if (title) {
    const searchResults = getBooksByTitle(title);
    res.json({
      success: true,
      message: `Searched titles for ${title}`,
      payload: searchResults,
    });
    return;
  }

  const books = getAllBooks();

  res.json({ success: true, message: `all books`, payload: books });
});

// GET specific book by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const requestedBook = getBookById(id);
  res.json({
    success: true,
    message: `Found book ${id}`,
    payload: requestedBook,
  });
});

export default router;
