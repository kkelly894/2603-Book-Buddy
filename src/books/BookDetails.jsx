import { useState } from "react";
import { Link } from "react-router";
import { reserveBook } from "../api/reservations";

export default function BookDetails({ book, setBook, token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleReserveBook() {
    setError(null);
    setSuccessMessage(null);

    if (!token) {
      setError("You must be logged in to reserve a book.");
      return;
    }

    if (!book.available) {
      setError("This book is already reserved.");
      return;
    }

    try {
      const result = await reserveBook(book.id, token);

      console.log("reserve result", result);

      if (result) {
        setSuccessMessage("Book reserved successfully.");

        setBook({
          ...book,
          available: false,
        });
      } else {
        setError("There was an error reserving this book.");
      }
    } catch (error) {
      console.error("There was an error reserving this book", error);
      setError("There was an error reserving this book.");
    }
  }

  return (
    <section className="book-details">
      <img src={book.coverimage} alt={book.title} />

      <h2 className="book-title">{book.title}</h2>

      <h3 className="book-author">{book.author}</h3>

      <p>{book.description}</p>

      <p>Status: {book.available ? "Available" : "Reserved"}</p>

      {error && <p>{error}</p>}

      {successMessage && <p>{successMessage}</p>}

      {book.available && (
        <button onClick={handleReserveBook}>Reserve Book</button>
      )}

      <Link to="/" className="book-link">
        Back to all Books
      </Link>
    </section>
  );
}
