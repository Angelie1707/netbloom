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
    <div className="component list">
      <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 3, md: 6 }} className="content-top flex-center">
        {allCaseStudiesData&&
          allCaseStudiesData.map( ( caseStudy, index ) => (
            <Grid item xs={12} sm={6} md={5} lg={5} xl={5} key={caseStudy.slug.current} className="stretch">
              <Link to={"/case-study/"+caseStudy.slug.current} className="cs-block" title={caseStudy.title}>
                <img src={caseStudy.mainImage.asset.url} alt={caseStudy.title} />
                <div className="content">
                  <h1>{caseStudy.title}</h1>
                  <Link to={"/case-study/"+caseStudy.slug.current} className="whiteTxt" title={caseStudy.title}>Read more ›</Link>
                </div>
              </Link>
            </Grid>
          ) )}
      </Grid>
    </div>
  );
}