/* eslint-disable no-unused-vars */
// import React from 'react';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Header from "./components/header/Header";
import BookList from "./components/book-list/BookList";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import BookCreate from "./components/book-create/BookCreate";
import BookDetails from "./components/book-details/BookDetails";
import { useState } from "react";
import AuthContext from "./contexts/authContext";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/book-create" element={<BookCreate />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
