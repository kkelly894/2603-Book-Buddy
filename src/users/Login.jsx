import { useState } from "react";
import { loginUser } from "../api/auth";

export default function Login({ setToken }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleLogin(event) {
    event.preventDefault();

    setError(null);
    setSuccessMessage(null);

    const formData = new FormData(event.target);

    const userInfo = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = await loginUser(userInfo);

    console.log("login result", result);

    if (result && result.token) {
      localStorage.setItem("token", result.token);
      setToken(result.token);

      setSuccessMessage("You've been successfully logged in.");
    } else {
      setError(result?.message || "There was an error logging in.");
    }
  }

  return (
    <section>
      <h1>Login</h1>

      {error && <p>{error}</p>}

      {successMessage && <p>{successMessage}</p>}

      <form onSubmit={handleLogin}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button>Login</button>
      </form>
    </section>
  );
}
