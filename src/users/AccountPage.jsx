import { useEffect, useState } from "react";
import { getUserProfile } from "../api/users";
import { getReservations, returnBook } from "../api/reservations";

export default function AccountPage({ token }) {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAccount() {
      setError(null);

      if (!token) {
        setError("You must be logged in to view your account.");
        return;
      }

      try {
        const userData = await getUserProfile(token);
        const reservationData = await getReservations(token);

        setUser(userData);
        setReservations(reservationData || []);
      } catch (error) {
        console.error("There was an error loading account", error);
        setError("There was an error loading your account.");
      }
    }

    loadAccount();
  }, [token]);

  async function handleReturnBook(reservationId) {
    setError(null);

    try {
      const wasReturned = await returnBook(reservationId, token);

      if (wasReturned) {
        const updatedReservations = reservations.filter((reservation) => {
          return reservation.id !== reservationId;
        });

        setReservations(updatedReservations);
      } else {
        setError("There was an error returning this book.");
      }
    } catch (error) {
      console.error("There was an error returning this book", error);
      setError("There was an error returning this book.");
    }
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="account-page">
      <h1>Account</h1>

      {user && (
        <section className="profile-card">
          <h2>
            {user.firstname} {user.lastname}
          </h2>

          <p>{user.email}</p>
        </section>
      )}

      <section>
        <h2>Reserved Books</h2>

        <div className="reserved-books">
          {reservations.map((reservation) => {
            const book = reservation.book || reservation;

            return (
              <article key={reservation.id} className="reserved-book-card">
                {book.coverimage && (
                  <img src={book.coverimage} alt={book.title} />
                )}

                <div className="reserved-book-info">
                  <h3>{book.title}</h3>

                  <p>{book.author}</p>

                  <button onClick={() => handleReturnBook(reservation.id)}>
                    Return Book
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
