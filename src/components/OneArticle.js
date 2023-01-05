import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OneArticle() {
  const [articleData, setArticleData] = useState(null);
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
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setArticleData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!articleData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{articleData.title}</h2>
        <div>
          <img
            src={urlFor(articleData.authorImage).width(100).url()}
            alt="Author is Kap"
          />
          <h4>{articleData.name}</h4>
        </div>
      </div>
      <img src={urlFor(articleData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={articleData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}