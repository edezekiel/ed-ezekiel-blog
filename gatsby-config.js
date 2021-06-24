const path = require("path")
const urljoin = require("url-join")

const config = {
  siteTitle: "Ed Ezekiel",
  siteTitleShort: "Ed Ezekiel",
  siteTitleTemplate: "%s | Ed Ezekiel",
  siteUrl: "https://www.edezekiel.com",
  pathPrefix: '',
  repo: "https://github.com/edezekiel/ed-ezekiel-blog",
  siteLogo: "src/images/logo-keyboard.png",
  siteTitleDescription: "I'm a frontend web developer and former attorney. Welcome to my web development blog.",
  googleAnalyticsId: "UA-127685480-1",
  siteImage: "src/images/logo-keyboard.png",
  userTwitter: "EdwardAEzekiel",
  userEmail: "ed.a.ezekiel@gmail.com",
  backgroundColor: "#16161a",
  themeColor: "#7f5af0"
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    title: config.siteTitle,
    titleTemplate: config.siteTitleTemplate,
    description: config.siteDescription,
    author: config.userEmail,
    twitterUsername: config.userTwitter,
    userName: config.userName,
    userEmail: config.userEmail,
    image: config.siteImage
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsId,
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
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.siteImage, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
};
