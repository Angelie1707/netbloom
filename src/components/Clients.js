import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Clients() {
  const [ClientsData, setClients] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "clients"]{
        clientName,
        clientUrl,
        sliderLogo{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setClients(data))
      .catch(console.error);
  }, []);

  return (
    <div className="default-sec clients-section no-padd">
      <div className="default-sec-overlay">
        <div className="default-sec-content no-padd">
          <div className="default-sec-wrap">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={10}
              loop={true}
              speed={5000}
              autoplay={{
                enabled: true,
                delay: 1,
              }}
              modules={[Autoplay]}
              className="clients-carousel"
            >
              {ClientsData &&
                ClientsData.map((clients, index) => (
                  <SwiperSlide key={index} className="slide-item">
                    <span>
                      <a href={clients.clientUrl} title={clients.clientName} target="_blank" rel="noreferrer">
                        <img src={clients.sliderLogo.asset.url} alt={clients.clientName} />
                      </a>
                    </span>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div> 
        </div>
      </div>
    </div>
  );
}