import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
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
    <div className="component case-studies">
      <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 4, md: 4 }} className="content-top flex-center">
        {allCaseStudiesData &&
          allCaseStudiesData.map((caseStudy, index) => (
            <Grid item xs={12} sm={6} md={6} key={caseStudy.slug.current} >
              <Link to={"/case-study/" + caseStudy.slug.current} className="cs-block" title={caseStudy.title}>
                <img src={caseStudy.mainImage.asset.url} alt="" />
                <div className="content">
                  <h3 className="whiteTxt">{caseStudy.title}</h3>
                  <Link to={"/case-study/" + caseStudy.slug.current} className="whiteTxt" title={caseStudy.title}>Read more ›</Link>
                </div>
              </Link>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}