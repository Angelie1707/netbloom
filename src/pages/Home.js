import React from "react";
import bannerBg from '../assets/images/digital-marketing-services-dunedin.webp';
import AllBlog from "../components/AllBlog.js";
import AllTestimonials from "../components/AllTestimonials.js";
import CtaForm from "../components/CtaForm.js";
import Grid from '@mui/material/Grid';
import target from '../assets/images/target.webp';
import graphic from '../assets/images/graphic-design.webp';
import statistics from '../assets/images/statistics.webp';


const banner = {
  backgroundImage: `url(${bannerBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default function Home() {
  return (
    <div className="Home">
      <div className="banner" style={banner}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>Websites that Elevate your Organisation</h1>
              <p>Reach Your Target Audience & Increase Your Enterprise Value With High-Impact SEO Services & Converting Web Design</p>
            </div>
          </div>
        </div>
      </div>
      <CtaForm/>
      <div className="default-sec results-driven">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap">
              <h2>Results-driven Marketing</h2>
              <p className="sub-head">Quality Leads. Better Conversions.</p>
              <Grid container rowSpacing={6} columns={{ xs: 4, sm: 4, md: 12 }} columnSpacing={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                  <img src={graphic} alt="Web Design"/>
                  <h3>Web Design</h3>
                  <p>Create a brand and communicate your value.</p>
                </Grid>
                <Grid item xs={4}>
                  <img src={statistics} alt="SEO"/>
                  <h3>SEO</h3>
                  <p>Find new clients organically and grow a foundation for tomorrow.</p>
                </Grid>
                <Grid item xs={4}>
                  <img src={target} alt="PPC"/>
                  <h3>PPC</h3>
                  <p>Put your business in front of the right people today.</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <AllTestimonials/>
      <AllBlog/>
    </div>
  );
}