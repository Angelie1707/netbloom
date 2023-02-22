import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
import ReadMoreReact from 'read-more-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
              spaceBetween={40}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={3}
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
              className="testimonial-carousel"
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
                    <div className="flex-left">
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