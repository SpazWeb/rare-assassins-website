const { PortableTextBlock, Slug, ImageAsset } = require("@sanity/types");

const Post = {
  _id: "",
  _type: "post",
  _createdAt: "",
  title: undefined,
  slug: new Slug(),
  excerpt: undefined,
  mainImage: new ImageAsset(),
  body: [],
};