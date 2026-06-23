import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout({ token, setToken }) {
  return (
    <>
      <Navbar token={token} setToken={setToken} />

      <main>
        <Outlet />
      </main>
    </>
  );
}
