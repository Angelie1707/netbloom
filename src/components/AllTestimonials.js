import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BlockContent from "@sanity/block-content-to-react";

export default function AllTestimonials() {
  const [allTestimonialsData, setAllTestimonials] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"]{
        client,
        text,
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
              <Carousel infiniteLoop centerMode={true} swipeable={true} showThumbs={false} centerSlidePercentage='60' showArrows={false} showIndicators={false} showStatus={false} emulateTouch={true}>
                {allTestimonialsData &&
                  allTestimonialsData.map((testimonial, index) => (
                    <div key={index} className="slide-item">
                      <p>
                        <BlockContent
                          blocks={testimonial.text}
                          projectId={sanityClient.projectId}
                          dataset={sanityClient.dataset}
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
                    </div>
                ))}
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}