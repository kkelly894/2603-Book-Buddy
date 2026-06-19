import { books } from "../fakedata/Books";

export default function BookCard({ book }) {
  console.log("the book card is working", book);
  return (
    <article className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h2 className="book-title">{book.title}</h2>
      <h3 className="book-author">{book.author}</h3>
      <p>{book.description}</p>
    </article>
  );
}
