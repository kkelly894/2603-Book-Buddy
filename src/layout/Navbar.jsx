import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Books</NavLink>

      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">Register</NavLink>

      <NavLink to="/account">Account</NavLink>
    </nav>
  );
}
