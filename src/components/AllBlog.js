import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import sanityClient from "../client.js";

export default function AllBlog() {
  const [allBlogData, setAllBlog] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        },
        publishedAt,
        "categories": categories[]->title,
        "name": author->name,
        "profileImage": author->profileImage,
      }
    }`
      )
      .then((data) => setAllBlog(data))
      .catch(console.error);
  }, []);

  return (
    <div className="component">
      <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 4, md: 6 }} className="content-top flex-center">
      {allBlogData &&
        allBlogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={blog.slug.current} className="stretch blog-item">
            <div key={blog.slug}>
              <Link to={"/blog/" + blog.slug.current} key={blog.slug.current} title={blog.title}>
                <img src={blog.mainImage.asset.url} alt="" />
              </Link>
              <div>
                {blog.categories &&(
                  <ul className="categories" style={{ listStyle: "none" }}>
                      {blog.categories.map((category, slug, i) => (
                          <li key={slug}>
                            <a href={"/blog/" + slug} title={category}>
                              <h3>{category}</h3>
                            </a>
                          </li>
                      ))}
                  </ul>
                )}
                <h1>{blog.title}</h1>
                <p>{blog.publishedAt}</p>
                <p><span>{blog.name}</span><span className="readmore"><Link to={"/blog/" + blog.slug.current} key={blog.slug.current} title={blog.title}>Read more</Link></span> </p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}