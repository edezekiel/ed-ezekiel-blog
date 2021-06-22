module.exports = {
  siteMetadata: {
    title: "Ed Ezekiel Blog",
    description: "I'm a frontend web developer and former attorney. Welcome to my web development blog.",
    url: "https://www.edezekiel.com",
    image: "/logo.png",
    twitterUsername: "EdwardAEzekiel",
    author: "ed.a.ezekiel@gmail.com",
    userName: 'Edward Ezekiel',
    userEmail: 'ed.a.ezekiel@gmail.com'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-127685480-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp"
  ],
};
