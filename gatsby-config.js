module.exports = {
  siteMetadata: {
    title: 'DATAVIS',
    author: 'Dima Keykin',
    description: 'DATAVIS based on Gatsby.js',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#222A35',
        theme_color: '#222A35',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        sourceMap: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
