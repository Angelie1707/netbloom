import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        }
      }
    }`
      )
      .then((data) => setAllBlog(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allBlogData &&
          allBlogData.map((blog, index) => (
            <Link to={"/" + blog.slug.current} key={blog.slug.current}>
              <span key={index}>
                <img src={blog.mainImage.asset.url} alt="" />
                <span>
                  <h2>{blog.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}