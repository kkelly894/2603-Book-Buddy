import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </section>
  );
}
