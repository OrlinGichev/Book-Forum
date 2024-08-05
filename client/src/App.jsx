// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles.css';

import Header from "./components/header/Header";
import BookList from './components/book-list/BookList';
import Login from './components/login/Login';
import Home from './components/home/Home';



function App() {


  return (
    <div id="app">
      <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/login" element={<Login />} />
          </Routes>
    </div>
  )
}

export default App
