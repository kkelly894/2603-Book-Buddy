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
