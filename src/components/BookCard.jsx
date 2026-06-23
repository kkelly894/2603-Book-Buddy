import { Link } from "react-router";

export default function BookCard({ book, setSelectedBookId }) {
  return (
    <article className="book-card">
      <img src={book.coverimage} alt={book.title} />

      <h2 className="book-title">{book.title}</h2>

      <h3 className="book-author">{book.author}</h3>

      <p>{book.description}</p>

      <p>Status: {book.available ? "Available" : "Reserved"}</p>

      <button onClick={() => setSelectedBookId(book.id)}>View Details</button>
    </article>
  );
}
