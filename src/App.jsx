import { useState } from "react";
import { Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import BooksPage from "./books/BooksPage";
import BookDetailsPage from "./books/BookDetailsPage";
import Login from "./users/Login";
import Register from "./users/Register";
import AccountPage from "./users/AccountPage";
import Error404 from "../Error404";

export default function App() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  return (
    <Routes>
      <Route path="/" element={<Layout token={token} setToken={setToken} />}>
        <Route index element={<BooksPage />} />

        <Route path="/books" element={<BooksPage />} />

        <Route
          path="/books/:bookId"
          element={<BookDetailsPage token={token} />}
        />

        <Route path="/login" element={<Login setToken={setToken} />} />

        <Route path="/register" element={<Register setToken={setToken} />} />

        <Route path="/account" element={<AccountPage token={token} />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
