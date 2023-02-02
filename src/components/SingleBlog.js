import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import {Helmet} from "react-helmet";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OneBlog() {
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
         body,
         seoTitle,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData) return <div>Loading...</div>;

  return (
    <div className="singleBlog">
      <Helmet>
          <title>{(blogData.seoTitle ? blogData.seoTitle : blogData.title)}</title>
          <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div>
        <h2>{blogData.title}</h2>
        <div>
          <img
            src={urlFor(blogData.authorImage).width(100).url()}
            alt={blogData.name}
          />
          <h4>{blogData.name}</h4>
        </div>
      </div>
      <img src={urlFor(blogData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={blogData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
    </div>
  );
}