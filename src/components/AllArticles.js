import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllArticles() {
  const [allArticlesData, setAllArticles] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "article"]{
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
      .then((data) => setAllArticles(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allArticlesData &&
          allArticlesData.map((article, index) => (
            <Link to={"/" + article.slug.current} key={article.slug.current}>
              <span key={index}>
                <img src={article.mainImage.asset.url} alt="" />
                <span>
                  <h2>{article.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}