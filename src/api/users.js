const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getUserProfile(token) {
  try {
    const response = await fetch(API + "/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();

    if (result.user) {
      return result.user;
    }

    if (result.data) {
      return result.data;
    }

    return result;
  } catch (error) {
    console.error("There was an error getting user profile", error);
    return null;
  }
}
