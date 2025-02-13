const config = require('./config/site');

  module.exports = {
    siteMetadata: {
      ...config,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
//    {
//      resolve: `gatsby-plugin-sass`,
//      options: {
//        sassOptions: {
//          precision: 6,
//        },
//      },
//    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ledpc.com',
        sitemap: 'https://www.ledpac.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
