import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import AllArticles from "./components/AllArticles.js";
import OneArticle from "./components/OneArticle.js";
import './App.css';
import './Global.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/" exact />
          <Route element={<AllArticles/>} path="/blog" />
          <Route element={<OneArticle/>} path="/:slug" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
