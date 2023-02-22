import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Logo from '../assets/Logo-1.webp';
import sanityClient from "../client.js";

export default function AllCaseStudies() {
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
          }
        }`
      )
      .then((data) => setAllCaseStudies(data))
      .catch(console.error);
  }, []);

  return (
    <div className="default-sec component case-studies">
      <div className="default-sec-overlay">
        <div className="default-sec-content">
          <div className="default-sec-wrap">
            <Grid container rowSpacing={2} columns={{ xs: 6, sm: 6, md: 12 }} columnSpacing={{ xs: 6, sm: 6, md: 6 }} className="content-top flex-center">
              <Grid item xs={3}>
                <div className="grid-item left-con">
                  <Link to="/"><img src={Logo} alt="Netbloom Logo" className="logo"/></Link>
                  <h2>Case Studies</h2>
                  <p class="sub-head LogoPurpleTxt">Proven results.</p>
                  <p>We're proud to deliver results to a range of different industries.</p>
                  <Link to="/case-studies" className="gradientButton1 btn">Case Studies</Link>
                </div>
              </Grid>
              <Grid item xs={9}>
                <div className="grid-item right-con">
                  <Grid container rowSpacing={2} columns={{ xs: 6, sm: 6, md: 12 }} columnSpacing={{ xs: 4, sm: 4, md: 4 }} className="content-top flex-center">
                    {allCaseStudiesData &&
                      allCaseStudiesData.map((caseStudy, index) => (
                        <Grid item xs={6}>
                          <Link to={"/case-study/" + caseStudy.slug.current} className="cs-block" key={caseStudy.slug.current} title={caseStudy.title}>
                            <img src={caseStudy.mainImage.asset.url} alt="" />
                            <div className="content">
                              <h3 className="whiteTxt">{caseStudy.title}</h3>
                              <Link to={"/case-study/" + caseStudy.slug.current} className="whiteTxt" key={caseStudy.slug.current} title={caseStudy.title}>Read more ›</Link>
                            </div>
                          </Link>
                        </Grid>
                    ))}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}