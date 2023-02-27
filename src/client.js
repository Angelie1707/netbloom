import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mjyehiv5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});