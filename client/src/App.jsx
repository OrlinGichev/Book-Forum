/* eslint-disable no-unused-vars */
// import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import * as authService from "./services/authService";

import Header from "./components/header/Header";
import BookList from "./components/book-list/BookList";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import BookCreate from "./components/book-create/BookCreate";
import BookDetails from "./components/book-details/BookDetails";
import { useState } from "react";
import {AuthProvider} from "./contexts/authContext";
import Logout from "./components/logout/Logout";
import BookEdit from "./components/book-edit/BookEdit";
import AuthGuard from "./components/guards/AuthGuard";

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');
  };

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values.email,values.password);

      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');

    }catch (err) {
      console.error("Registration failed", err);
    }
  };

  const logoutHandler = () => {

    setAuth({});

    localStorage.removeItem('accessToken');

    navigate('/');
  };

  const dataContext = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthProvider value={dataContext}>
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
