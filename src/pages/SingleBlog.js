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

  // const [author, setAuthor] = useState([]);
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type = "users"]`,
  //     )
  //     .then((data) => setAuthor(data))
  //     .catch(console.error);
  // }, []);

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
          "profileImage": author->profileImage,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(blogData.mainImage).url();

  document.body.classList.remove('home','main-blog', 'main-case-study', 'case-study', 'single-case-study');
  document.body.classList.add('blog', 'single-blog');

  return (
    <div className="singleBlog page-content" key={blogData.slug}>
      <Helmet>
          <title> {blogData.seoTitle ? blogData.seoTitle : blogData.title} </title>
          <meta name="robots" content={blogData.noIndex ? blogData.noIndex : 'index'} />
          <meta name="description" content={blogData.seoDescription} />
          <meta property='og:title' content={blogData.ogTitle ? blogData.ogTitle : blogData.title} />
          <meta property='og:description' content={blogData.ogDescription} />
          <meta property='og:image' content={blogData.ogImage ? urlFor(blogData.ogImage).width(300).url() : urlFor(blogData.mainImage).width(300).url()} />
      </Helmet>
      <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>{blogData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
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
              <div className="author">
                {blogData.profileImage && (
                  <img
                    src={urlFor(blogData.profileImage).width(100).url()}
                    alt={blogData.name}
                  />
                )}
                <h4>{blogData.name}</h4>
              </div>
            </div>
            {blogData.categories &&(
                <ul className="categories" style={{ listStyle: "none" }}>
                    {blogData.categories.map((category, categoriesSlug, i) => (
                        <li key={categoriesSlug}>
                          <a href={"/blog/" + categoriesSlug} title={category}>
                            <h3>{category}</h3>
                          </a>
                        </li>
                    ))}
                </ul>
              )}
            {/* {blogData.mainImage && (
              <img
                src={urlFor(blogData.mainImage).url()}
                alt={blogData.title}
              />
            )} */}
            <div>
              <BlockContent
                blocks={blogData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}