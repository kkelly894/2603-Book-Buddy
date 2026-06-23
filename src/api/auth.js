const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(userInfo) {
  try {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was an error registering", error);
    return null;
  }
}

export async function loginUser(userInfo) {
  try {
    const response = await fetch(API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was an error logging in", error);
    return null;
  }
}
