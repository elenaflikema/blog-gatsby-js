module.exports = {
  siteMetadata: {
    title: `ПРИЮТ ДЛЯ ВЕЩЕЙ`,
    description: `English Teacher, Free English Lessons, English Grammar`,
    author: `@elenaflikema`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cormorant Unicase', 'Didact Gothic', 'Fira Sans Extra Condensed:500,900', 'Prosto One', 'Pacifico']
        }
      }
    }
  ],
};
