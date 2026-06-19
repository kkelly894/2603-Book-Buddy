import BookCard from "./BookCard";
import { books } from "../fakedata/Books";

export default function BookList() {
  console.log("booklist", books);

  return (
    <section className="book-list">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </section>
  );
}
