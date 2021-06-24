const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Ed Ezekiel Blog",
    titleTemplate: "%s | Ed Ezekiel Blog",
    description: "I'm a frontend web developer and former attorney. Welcome to my web development blog.",
    url: "https://www.edezekiel.com",
    image: "src/images/logo.svg",
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
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          options: {
            colorTheme: 'Dark+ (default dark)',
            injectStyles: true,
            extensions: [],
            extensionDataDirectory:
              path.resolve('extensions'),
            logLevel: 'error'
          }
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ed Ezekiel Blog",
        short_name: "Ed Ezekiel Blog",
        start_url: "https://www.edezekiel.com",
        background_color: "#16161a",
        theme_color: "#7f5af0",
        display: "standalone",
        icon: "src/images/logo.svg", // This path is relative to the root of the site.
      },
    },
  ],
};
