import React from "react";
// import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AllBlog from "../components/AllBlog.js";
import '../assets/css/blog.scss';

export default function Blog() {

  document.body.classList.remove('home', 'single-blog','case-study', 'main-case-study', 'single-case-study');
  document.body.classList.add('blog', 'main-blog');

  return (
    <div className="blog page-content">
      <Helmet>
          <title>Digital Marketing Blog</title>
          <meta name="robots" content="index" />
          <meta name="description" content="" />
          <meta property='og:title' content="" />
          <meta property='og:description' content=""/>
          <meta property='og:image' content="" />
      </Helmet>
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>Digital Marketing Blog</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">Blog</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <AllBlog/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}