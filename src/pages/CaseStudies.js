import React from "react";
// import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AllCaseStudies from "../components/AllCaseStudies.js";
import '../assets/css/case-study.scss';

export default function CaseStudies() {

  document.body.classList.remove('home','blog', 'main-blog', 'single-blog', 'single-case-study');
  document.body.classList.add('case-study', 'main-case-study');

  return (
    <div className="case-study page-content">
      <Helmet>
          <title>Case Studies</title>
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
              <h1>Case Studies</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">Case Studies</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <AllCaseStudies/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}