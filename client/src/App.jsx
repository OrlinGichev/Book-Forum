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

import {AuthProvider} from "./contexts/authContext";
import Logout from "./components/logout/Logout";
import BookEdit from "./components/book-edit/BookEdit";
import AuthGuard from "./components/guards/AuthGuard";

function App() {

  

  return (
    <AuthProvider>
      <div id="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books/:bookId" element={<BookDetails />} />

          <Route element={<AuthGuard />} >
              <Route path="/book-create" element={<BookCreate />} />
              <Route path="/books/:bookId/edit" element={<BookEdit />} />
              <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
