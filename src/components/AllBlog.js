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
    <div className="component">
      {allBlogData &&
        allBlogData.map((blog, index) => (
          <Link to={"/blog/" + blog.slug.current} key={blog.slug.current} title={blog.title}>
            <span key={index}>
              <img src={blog.mainImage.asset.url} alt="" />
              <span>
                <h1>{blog.title}</h1>
              </span>
            </span>
          </Link>
        ))}
    </div>
  );
}