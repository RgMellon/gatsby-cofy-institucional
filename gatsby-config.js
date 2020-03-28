/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#DDC79E`,
        showSpinner: false,
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CofyCode`,
        short_name: `Cofy`,
        start_url: `/`,
        background_color: `#DDC79E`,
        theme_color: `#40433D`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-offline`,
  ],
}
