import React from "react";
// import { Link } from "react-router-dom";
import bannerBg from '../assets/images/digital-marketing-services-dunedin.webp';

const banner = {
  backgroundImage: `url(${bannerBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default function AllArticles() {
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
    </div>
  );
}