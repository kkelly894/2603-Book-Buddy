import { useState } from "react";
import { registerUser } from "../api/auth";

export default function Register({ setToken }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleRegister(event) {
    event.preventDefault();

    setError(null);
    setSuccessMessage(null);

    const formData = new FormData(event.target);

    const userInfo = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = await registerUser(userInfo);

    console.log("register result", result);

    if (result && result.token) {
      localStorage.setItem("token", result.token);
      setToken(result.token);

      setSuccessMessage("You've been successfully registered.");
    } else {
      setError(result?.message || "There was an error registering.");
    }
  }

  return (
    <section>
      <h1>Register</h1>

      {error && <p>{error}</p>}

      {successMessage && <p>{successMessage}</p>}

      <form onSubmit={handleRegister}>
        <label>
          First Name
          <input type="text" name="firstname" required />
        </label>

        <label>
          Last Name
          <input type="text" name="lastname" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button>Register</button>
      </form>
    </section>
  );
}
