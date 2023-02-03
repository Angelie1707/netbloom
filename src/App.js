import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import AllBlog from "./components/AllBlog.js";
import SingleBlog from "./components/SingleBlog.js";
import AllTestimonials from "./components/AllTestimonials.js";
import './App.css';
import './Global.scss';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="index" />
        <link rel="canonical" href={window.location.href} />
        <title>Netbloom: SEO Services in NZ | Guaranteed Results</title>
      </Helmet>
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/" exact />
          <Route element={<AllBlog/>} path="/blog" />
          <Route element={<AllTestimonials/>} path="/testimonials" />
          <Route element={<SingleBlog/>} path="/:slug" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
