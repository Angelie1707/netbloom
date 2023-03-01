import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import {Helmet} from "react-helmet";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleCaseStudy() {
  const [caseStudiesData, setCaseStudiesData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          "categories": categories[]->title,
          body,
          seoTitle,
          seoDescription,
          ogTitle,
          ogDescription,
          ogImage{
            asset->{
              _id,
              url
            }
          },
          "name": author->name,
          "authorImage": author->image,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setCaseStudiesData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!caseStudiesData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(caseStudiesData.mainImage).url();

  document.body.classList.remove('home','blog', 'main-blog', 'single-blog', 'main-case-study');
  document.body.classList.add('case-study', 'single-case-study');

  return (
    <div className="SingleCaseStudy page-content">
      <Helmet>
          <title> {caseStudiesData.seoTitle ? caseStudiesData.seoTitle : caseStudiesData.title} </title>
          <meta name="robots" content={caseStudiesData.noIndex ? caseStudiesData.noIndex : 'index'} />
          <meta name="description" content={caseStudiesData.seoDescription} />
          <meta property='og:title' content={caseStudiesData.ogTitle ? caseStudiesData.ogTitle : caseStudiesData.title} />
          <meta property='og:description' content={caseStudiesData.ogDescription} />
          <meta property='og:image' content={caseStudiesData.ogImage ? urlFor(caseStudiesData.ogImage).width(300).url() : urlFor(caseStudiesData.mainImage).width(300).url()} />
      </Helmet>
      <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>{caseStudiesData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="/case-studies">
                  Case Studies
                </Link>
                <Typography color="text.primary">{caseStudiesData.title}</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec caseStudies-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              {/* <div>
                {caseStudiesData.authorImage && (
                  <img
                    src={urlFor(caseStudiesData.authorImage).width(100).url()}
                    alt={caseStudiesData.name}
                  />
                )}
                <h4>{caseStudiesData.name}</h4>
              </div> */}
            </div>
            {caseStudiesData.categories &&(
                <ul className="categories" style={{ listStyle: "none" }}>
                    {caseStudiesData.categories.map((category, categoriesSlug, i) => (
                        <li key={categoriesSlug}>
                          <a href={"/caseStudies/" + categoriesSlug} title={category}>
                            <h3>{category}</h3>
                          </a>
                        </li>
                    ))}
                </ul>
              )}
            {/* {caseStudiesData.mainImage && (
              <img
                src={urlFor(caseStudiesData.mainImage).url()}
                alt={caseStudiesData.title}
              />
            )} */}
            <div>
              <BlockContent
                blocks={caseStudiesData.body}
                projectId={client.mjyehiv5}
                dataset={client.production}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}