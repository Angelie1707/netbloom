import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import {Helmet} from "react-helmet";
import Logo from '../assets/Logo-1.webp';
import AllTestimonials from "../components/AllTestimonials.js";
import AllCaseStudies from "../components/AllCaseStudies.js";
import Clients from "../components/Clients.js";
import Faqs from "../components/Faqs.js";
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
import el7 from '../assets/elements/Polygon 3 (1).webp';
import el8 from '../assets/elements/Polygon 4 (1).webp';
import el9 from '../assets/elements/Polygon 4 (2).webp';
import el10 from '../assets/elements/Polygon 3 (2).webp';
import el11 from '../assets/elements/Polygon 7.webp';
import el12 from '../assets/elements/Polygon 12.webp';
import el13 from '../assets/elements/Polygon 9.webp';
import el14 from '../assets/elements/Polygon 3 (3).webp';
import el15 from '../assets/elements/Polygon 8.webp';
import deadline from '../assets/icons/deadline.webp';
import computer from '../assets/icons/computer.webp';
import smartphone from '../assets/icons/smartphone.webp';
import magnifying from '../assets/icons/magnifying-glass.webp';


// const banner = {
//   backgroundImage: `url(${bannerBg})`,
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

export default function Home() {
  return (
    <div className="home page">
      <Helmet>
        <title>Netbloom: SEO Services in NZ | Guaranteed Results</title>
        <meta name="robots" content="index" />
        <meta name="description" content="Leading SEO services in NZ. Transparent, no contracts & 100% performance based. Generate more leads & sales with Netbloom." />
        <meta property='og:title' content="Netbloom: SEO Services in NZ | Guaranteed Results" />
        <meta property='og:description' content="Leading SEO services in NZ. Transparent, no contracts & 100% performance based. Generate more leads & sales with Netbloom."/>
        <meta property='og:image' content="" />
      </Helmet>
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>Websites that Elevate your Organisation</h1>
              <p>Reach Your Target Audience & Increase Your Enterprise Value With High-Impact SEO Services & Converting Web Design</p>
              <div className="flex-left btns">
                <Link to="#" className="gradientButton1 btn">Get a Quote</Link>
                <Link to="https://www.google.com/search?q=netbloom&rlz=1C1ONGR_enPH1012PH1012&oq=netbloom&aqs=chrome..69i57j46i10i131i433i512j69i60l3j69i61j69i65l2.1752j0j7&sourceid=chrome&ie=UTF-8#lrd=0xa82ea9ecc91883d3:0xe045a8ae841b57ff,1,,,," target="_blank" title="Netbloom Google Reviews"><img src={google} alt="Google Reviews"/></Link>
              </div>
            </div>
          </div>
          <div className="clients">
            <Clients/>
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
      <div className="default-sec results-driven center darkblueBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap max1200">
              <h2 data-aos="fade">Results-driven Marketing</h2>
              <p className="sub-head">Quality Leads. Better Conversions.</p>
              <Grid container rowSpacing={6} columns={{ xs: 4, sm: 4, md: 12 }} columnSpacing={{ xs: 4, sm: 4, md: 4 }} className="flex-center">
                <Grid item xs={4} sm={4} md={4} data-aos="fade">
                  <div className="grid-item whiteBg">
                    <img src={graphic} alt="Web Design"/>
                    <h3>Web Design</h3>
                    <p>Create a brand and communicate your value.</p>
                  </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} data-aos="fade">
                  <div className="grid-item whiteBg">
                    <img src={statistics} alt="SEO"/>
                    <h3>SEO</h3>
                    <p>Find new clients organically and grow a foundation for tomorrow.</p>
                  </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} data-aos="fade">
                  <div className="grid-item whiteBg">
                    <img src={target} alt="PPC"/>
                    <h3>PPC</h3>
                    <p>Put your business in front of the right people today.</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="el-7 spin" src={el7} alt="Polygon"/>
            <img className="el-8 spin" src={el8} alt="Polygon"/>
          </div>
        </div>
      </div>
      <div className="default-sec why-trust bg-sec center">
        <div className="default-sec-overlay">
          <img src={network1} alt="network1" className="top-left spin net-img"/>
          <img src={network} alt="network" className="bot-right spin net-img"/>
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap">
              <h2 data-aos="fade">Why Trust Netbloom For Your Digital Operations?</h2>
              <p className="sub-head">Quality Leads. Better Conversions.</p>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 3 }}  className="stretch">
                <Grid item xs={12} sm={6} md={3} className="stretch">
                  <div className="grid-item">
                    <img src={lightbulb} alt="Work With Technical SEO Masters"/>
                    <h4>Work With Technical SEO Masters</h4>
                    <p>Thanks to their experience as Web Developers, our Netbloom professionals can take your technical SEO game to the next level, working with a wide range of online platforms, instead of being limited to the basics, like other marketing agencies.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="stretch">
                  <div className="grid-item">
                    <img src={dashboard} alt="Access Personalised Dashboard Reports"/>
                    <h4>Access Personalised Dashboard Reports</h4>
                    <p>The more you know about your business, the better you can operate to maximise its value. Connected to multiple data sources, our dashboard reports will offer you all the analytics you need, including keyword position tracking, phone calls from Google Maps, Google analytics, and many more.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="stretch">
                  <div className="grid-item">
                    <img src={deliveryservice} alt="Enjoy A Service Package Tailored To You"/>
                    <h4>Enjoy A Service Package Tailored To You</h4>
                    <p>Every customer is unique, and so is their business. At Netbloom, we customise our services to your requirements, dreams, and goals, offering fully personalised packages designed to respond to your specific needs.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="stretch">
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
      <div className="testimonial-divider"></div>
      <AllTestimonials/>
      <div className="default-sec ready left lightGrayBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content max1200">
            <div className="default-sec-wrap">
              <Grid container rowSpacing={2} columns={{ xs: 6, sm: 6, md: 12 }} columnSpacing={{ xs: 6, sm: 6, md: 6 }} className="content-top flex-center">
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2>Are You Ready To Establish Your Presence In The Digital World?</h2>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    <p>Now you don’t have to settle for inefficient SEO plans that fail to deliver the flow of leads you wish or short-term solutions that don’t align with your business goals. At Netbloom, we use industry tools tailored to your brand identity to help you grow your business and build a robust online presence.</p>
                  </div>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2}  className="content-bot flex-center">
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={deadline} alt="Fast"/>
                    <h4 className="darkblueBgTxt">Fast</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={computer} alt="Modern"/>
                    <h4 className="darkblueBgTxt">Modern</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={smartphone} alt="Mobile-Friendly"/>
                    <h4 className="darkblueBgTxt">Mobile-Friendly</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={magnifying} alt="Optimised for Search"/>
                    <h4 className="darkblueBgTxt">Optimised for Search</h4>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="el-9 spin" src={el9} alt="Polygon"/>
            <img className="el-10" src={el10} alt="Polygon"/>
            <img className="el-11" src={el11} alt="Polygon"/>
          </div>
        </div>
      </div>
      <div className="default-sec case-studies">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 6, md: 6 }} className="content-top flex-center">
                <Grid item xs={12} sm={12} md={3}>
                  <div className="grid-item left-con">
                    <Link to="/"><img src={Logo} alt="Netbloom Logo" className="logo"/></Link>
                    <h2>Case Studies</h2>
                    <p className="sub-head LogoPurpleTxt">Proven results.</p>
                    <p>We're proud to deliver results to a range of different industries.</p>
                    <Link to="/case-studies" className="gradientButton1 btn">Case Studies</Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <div className="grid-item right-con">
                    <AllCaseStudies/>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec solutions left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content max1200">
            <div className="default-sec-wrap">
              <Grid container rowSpacing={2} columns={{ xs: 6, sm: 6, md: 12 }} columnSpacing={{ xs: 6, sm: 6, md: 6 }} className="content-top flex-center">
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2><span>Solutions</span> delivered using the best tools on the best platforms</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                    <Link to="/portfolio" className="gradientButton1 btn">Our Portfolio</Link>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="el-12 spin" src={el12} alt="Polygon"/>
          </div>
        </div>
      </div>
      <div className="default-sec checklist left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap bluePurpleGradient">
              <Grid container columns={{ xs: 6, sm: 6, md: 12 }} columnSpacing={{ xs: 6, sm: 6, md: 6 }} className="content flex-center">
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2>Take Your SEO To New Heights With Our Free Checklist</h2>
                    <Link to="/checklist" className="gradientButton1 btn">Get the Checklist</Link>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    <p>Want to enhance your SEO knowledge and uncover more efficient optimisation tactics? Fill out our form and receive our free SEO checklist! This has been developed to introduce you to the world of search engine optimisation and help you use SEO-focused initiatives to drive traffic to your website, increasing revenue.</p>
                  </div>
                </Grid>
              </Grid>
              <div className="elements">
                <img className="el-13" src={el13} alt="Polygon"/>
                
                <img className="el-15 spin" src={el15} alt="Polygon"/>
              </div>
            </div>
          </div>
          <div className="elements">
            <img className="el-14" src={el14} alt="Polygon"/>
          </div>
        </div>
      </div>
      <Faqs/>
    </div>
  );
}