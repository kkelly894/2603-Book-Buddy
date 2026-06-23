import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBookById } from "../api/books";
import BookDetails from "./BookDetails";

export default function BookDetailsPage({ token }) {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadBook() {
      try {
        const bookData = await getBookById(bookId);

        setBook(bookData);
      } catch (error) {
        console.error("There was an error telling this tale", error);
      }
    }

    loadBook();
  }, [bookId]);

  if (!book) {
    return <p>Stories synchronizing...</p>;
  }

  return <BookDetails book={book} setBook={setBook} token={token} />;
}
