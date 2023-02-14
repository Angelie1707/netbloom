import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import {Helmet} from "react-helmet";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleBlog() {
  const [blogData, setBlogData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
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
          categories,
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
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Coming Soon..</center>;

  return (
    <div className="singleBlog page">
      <Helmet>
          <title> {blogData.seoTitle ? blogData.seoTitle : blogData.title} </title>
          <meta name="robots" content={blogData.noIndex ? blogData.noIndex : 'index'} />
          <meta name="description" content={blogData.seoDescription} />
          <meta property='og:title' content={blogData.ogTitle ? blogData.ogTitle : blogData.title} />
          <meta property='og:description' content={blogData.ogDescription} />
          <meta property='og:image' content={blogData.ogImage ? urlFor(blogData.ogImage).width(300).url() : urlFor(blogData.mainImage).width(300).url()} />
      </Helmet>
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>{blogData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="/blog">
                  Blog
                </Link>
                <Typography color="text.primary">{blogData.title}</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              {/* <h3>{blogData.categories}</h3> */}
              <div>
                {blogData.authorImage && (
                  <img
                    src={urlFor(blogData.authorImage).width(100).url()}
                    alt={blogData.name}
                  />
                )}
                <h4>{blogData.name}</h4>
              </div>
            </div>
            {blogData.mainImage && (
              <img
                src={urlFor(blogData.mainImage).url()}
                alt={blogData.title}
              />
            )}
            <div>
              <BlockContent
                blocks={blogData.body}
                projectId={sanityClient.mjyehiv5}
                dataset={sanityClient.production}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}