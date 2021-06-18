module.exports = {
  siteMetadata: {
    title: "Ed Ezekiel Blog",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-127685480-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
};
