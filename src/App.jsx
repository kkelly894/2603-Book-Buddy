import { useEffect, useState } from "react";
import { getBooks } from "./api/books";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Register from "./components/Register";
import Login from "./components/Login";

import { Route, Routes } from "react-router";

export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [token, setToken] = useState(null);

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

  const selectedBook = books.find((book) => {
    return book.id === selectedBookId;
  });

  return (
    <main>
      <h1>Book Buddy</h1>

      <Register setToken={setToken} />
      <Login setToken={setToken} />

      {selectedBook ? (
        <BookDetails
          book={selectedBook}
          setSelectedBookId={setSelectedBookId}
          token={token}
        />
      ) : (
        <BookList books={books} setSelectedBookId={setSelectedBookId} />
      )}
    </main>
  );
}
