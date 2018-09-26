module.exports = {
  siteMetadata: {
    title: 'Byte Lab',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    }
  ]
}
