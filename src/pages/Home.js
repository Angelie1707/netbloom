import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import {Helmet} from "react-helmet";
import AllBlog from "../components/AllBlog.js";
import AllTestimonials from "../components/AllTestimonials.js";
// import CtaForm from "../components/CtaForm.js";
// import bannerBg from '../assets/images/digital-marketing-services-dunedin.webp';
import target from '../assets/icons/target.webp';
import graphic from '../assets/icons/graphic-design.webp';
import statistics from '../assets/icons/statistics.webp';
import dashboard from '../assets/icons/dashboard.webp';
import deliveryservice from '../assets/icons/delivery-service.webp';
import seo from '../assets/icons/seo.webp';
import lightbulb from '../assets/icons/light-bulb.webp';
import network from '../assets/icons/network.webp';
import network1 from '../assets/icons/network-1.webp';
import google from '../assets/images/google reviews.webp';
import el1 from '../assets/elements/Polygon 1.webp';
import el2 from '../assets/elements/Polygon 2.webp';
import el3 from '../assets/elements/Polygon 3.webp';
import el4 from '../assets/elements/Polygon 4.webp';
import el5 from '../assets/elements/Polygon 5.webp';
import el6 from '../assets/elements/Polygon 6.webp';


// const banner = {
//   backgroundImage: `url(${bannerBg})`,
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

export default function Home() {
  return (
    <div className="Home">
      <Helmet>
          <title>Netbloom: SEO Services in NZ | Guaranteed Results</title>
      </Helmet>
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>Websites that Elevate your Organisation</h1>
              <p>Reach Your Target Audience & Increase Your Enterprise Value With High-Impact SEO Services & Converting Web Design</p>
              <div className="flex btns">
                <button className="gradientButton1 btn">Get a Quote</button>
                <Link to="https://www.google.com/search?q=netbloom&rlz=1C1ONGR_enPH1012PH1012&oq=netbloom&aqs=chrome..69i57j46i10i131i433i512j69i60l3j69i61j69i65l2.1752j0j7&sourceid=chrome&ie=UTF-8#lrd=0xa82ea9ecc91883d3:0xe045a8ae841b57ff,1,,,," target="_blank" title="Netbloom Google Reviews"><img src={google} alt="Google Reviews"/></Link>
              </div>
            </div>
          </div>
          <div className="clients">

          </div>
          <div className="elements">
            <img className="el-1" src={el1} alt="Web Design"/>
            <img className="el-2" src={el2} alt="Web Design"/>
            <img className="el-3" src={el3} alt="Web Design"/>
            <img className="el-4 spin" src={el4} alt="Web Design"/>
            <img className="el-5 spin" src={el5} alt="Web Design"/>
            <img className="el-6" src={el6} alt="Web Design"/>
          </div>
        </div>
      </div>
      <div className="default-sec results-driven center">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap">
              <h2>Results-driven Marketing</h2>
              <p className="sub-head">Quality Leads. Better Conversions.</p>
              <Grid container rowSpacing={6} columns={{ xs: 4, sm: 4, md: 12 }} columnSpacing={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                  <div className="grid-item">
                    <img src={graphic} alt="Web Design"/>
                    <h3>Web Design</h3>
                    <p>Create a brand and communicate your value.</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="grid-item">
                    <img src={statistics} alt="SEO"/>
                    <h3>SEO</h3>
                    <p>Find new clients organically and grow a foundation for tomorrow.</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="grid-item">
                    <img src={target} alt="PPC"/>
                    <h3>PPC</h3>
                    <p>Put your business in front of the right people today.</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec why-trust bg-sec center">
        <div className="default-sec-overlay">
          <img src={network1} alt="network1" className="top-left spin net-img"/>
          <img src={network} alt="network" className="bot-right spin net-img"/>
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap">
              <h2>Why Trust Netbloom For Your Digital Operations?</h2>
              <p className="sub-head">Quality Leads. Better Conversions.</p>
              <Grid container rowSpacing={4} columns={{ xs: 3, sm: 6, md: 12 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                <Grid item xs={3}>
                  <div className="grid-item">
                    <img src={lightbulb} alt="Work With Technical SEO Masters"/>
                    <h4>Work With Technical SEO Masters</h4>
                    <p>Thanks to their experience as Web Developers, our Netbloom professionals can take your technical SEO game to the next level, working with a wide range of online platforms, instead of being limited to the basics, like other marketing agencies.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="grid-item">
                    <img src={dashboard} alt="Access Personalised Dashboard Reports"/>
                    <h4>Access Personalised Dashboard Reports</h4>
                    <p>The more you know about your business, the better you can operate to maximise its value. Connected to multiple data sources, our dashboard reports will offer you all the analytics you need, including keyword position tracking, phone calls from Google Maps, Google analytics, and many more.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="grid-item">
                    <img src={deliveryservice} alt="Enjoy A Service Package Tailored To You"/>
                    <h4>Enjoy A Service Package Tailored To You</h4>
                    <p>Every customer is unique, and so is their business. At Netbloom, we customise our services to your requirements, dreams, and goals, offering fully personalised packages designed to respond to your specific needs.</p>
                    </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="grid-item">
                    <img src={seo} alt="Find The Solution That Fits Your Budget"/>
                    <h4>Find The Solution That Fits Your Budget</h4>
                    <p>Why waste your money on overpriced marketing services that don’t work? Benefit from our flexible pricing offers, choose the package that suits your budget criteria and save valuable time and money.</p>
                  </div>
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