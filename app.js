import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import router from "./routes/books.js";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/books", router);

export default app;
