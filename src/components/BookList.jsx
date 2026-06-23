import BookCard from "./BookCard";

export default function BookList({ books, setSelectedBookId }) {
  return (
    <section className="book-list">
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            book={book}
            setSelectedBookId={setSelectedBookId}
          />
        );
      })}
    </section>
  );
}
