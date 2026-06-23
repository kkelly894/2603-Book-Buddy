const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function reserveBook(bookId, token) {
  try {
    const response = await fetch(API + "/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        bookId: bookId,
      }),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was an error reserving this book", error);
    return null;
  }
}

export async function getReservations(token) {
  try {
    const response = await fetch(API + "/reservations", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();

    if (Array.isArray(result)) {
      return result;
    }

    if (result.reservations) {
      return result.reservations;
    }

    if (result.data) {
      return result.data;
    }

    return [];
  } catch (error) {
    console.error("There was an error getting reservations", error);
    return [];
  }
}

export async function returnBook(reservationId, token) {
  try {
    const response = await fetch(API + "/reservations/" + reservationId, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.ok;
  } catch (error) {
    console.error("There was an error returning this book", error);
    return false;
  }
}
