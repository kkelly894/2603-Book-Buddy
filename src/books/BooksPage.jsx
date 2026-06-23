import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookList from "./BookList";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const bookData = await getBooks();

        setBooks(bookData || []);
      } catch (error) {
        console.error("There was an error loading books", error);
      }
    }

    loadBooks();
  }, []);

  return <BookList books={books} />;
}
