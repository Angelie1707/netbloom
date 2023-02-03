import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
import ReadMoreReact from 'read-more-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function AllTestimonials() {
  const [allTestimonialsData, setAllTestimonials] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"]{
        client,
        clientTestimonial,
        fullName,
        position,
        website,
        rating,
        clientLogo{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <div className="default-sec testimonial-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
            <Swiper
              className="carousel"
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
            >
                {allTestimonialsData &&
                  allTestimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index} className="slide-item">
                      <p>
                        <ReadMoreReact text={testimonial.clientTestimonial}
                          min={200}
                          ideal={250}
                          max={300}
                          readMoreText={'read more...'}
                        />
                      </p>
                      <div className="flex">
                        <span>
                          <img src={testimonial.clientLogo.asset.url} alt={testimonial.client} />
                        </span>
                        <span className="name">
                          <p>{testimonial.fullName} <span>{testimonial.position}</span></p>
                          <h4><a href={testimonial.website} target="_blank" rel="noreferrer">{testimonial.client}</a></h4>
                        </span>
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}