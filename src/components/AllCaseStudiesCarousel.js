import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AllCaseStudiesCarousel() {
  const [allCaseStudiesData, setAllCaseStudies] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "case-study"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
            }
          },
          heading,
          subheading,
          clientLogo{
            asset->{
            _id,
            url
            }
          },
          testimonial
        }`
      )
      .then((data) => setAllCaseStudies(data))
      .catch(console.error);
  }, []);

  return (
    <div className="component carousel">
      <Swiper
              spaceBetween={20}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                enabled: true,
                delay: 5000,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="casestudies-carousel"
              breakpoints={{
                768: {
                  spaceBetween: 40,
                },
              }}
            >
        {allCaseStudiesData &&
          allCaseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index} className="slide-item">
              <Grid container className="stretch container">
                <Grid item xs={12} sm={6} md={8} className="flex-center content-left">
                  <Link to={"/case-study/" + caseStudy.slug.current} title={caseStudy.title} className="link-wrap">
                    <img src={caseStudy.mainImage.asset.url} alt={caseStudy.title} className="main-img"/>
                    <div className="content whiteTxt">
                      <img src={caseStudy.clientLogo.asset.url} alt={caseStudy.title} />
                      <h3 className="heading whiteTxt">{caseStudy.heading}</h3>
                      <p className="subheading whiteTxt">{caseStudy.subheading}</p>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="content-right">
                  <h4 className="client whiteTxt">{caseStudy.title}</h4>
                  <p className="testimonial whiteTxt">{caseStudy.testimonial}</p>
                  <Link to={"/case-study/" + caseStudy.slug.current} className="whiteTxt" title={caseStudy.title}>Read more ›</Link>
                </Grid>
              </Grid>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}