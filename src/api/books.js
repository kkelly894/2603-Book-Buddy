const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getBooks() {
  try {
    const response = await fetch(API + "/books");
    const result = await response.json();

    if (Array.isArray(result)) {
      return result;
    }

    if (result.books) {
      return result.books;
    }

    if (result.data) {
      return result.data;
    }

    return [];
  } catch (error) {
    console.error("There was an error getting books", error);
    return [];
  }
}

export async function getBookById(bookId) {
  try {
    const response = await fetch(API + "/books/" + bookId);
    const result = await response.json();

    if (result.book) {
      return result.book;
    }

    if (result.data) {
      return result.data;
    }

    return result;
  } catch (error) {
    console.error("There was an error getting this book", error);
    return null;
  }
}
