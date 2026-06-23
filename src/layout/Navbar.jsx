import { NavLink } from "react-router";

export default function Navbar({ token, setToken }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <header>
      <p>Book Buddy</p>

      <nav>
        <NavLink to="/">Books</NavLink>

        {!token && <NavLink to="/login">Login</NavLink>}

        {!token && <NavLink to="/register">Register</NavLink>}

        {token && <NavLink to="/account">Account</NavLink>}

        {token && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
