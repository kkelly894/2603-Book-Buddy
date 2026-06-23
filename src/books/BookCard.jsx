import { Link } from "react-router";

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <img src={book.coverimage} alt={book.title} />

      <div className="book-card-info">
        <div className="book-card-header">
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">{book.author}</h3>
        </div>

        <p className="book-description">{book.description}</p>

        <p className="book-status">
          Status: {book.available ? "Available" : "Reserved"}
        </p>

        <Link to={"/books/" + book.id}>View Details</Link>
      </div>
    </article>
  );
}
