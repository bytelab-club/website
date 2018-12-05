module.exports = {
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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Byte Lab",
        description: "Lowell's all inclusive coding community under Hack Club.",
        short_name: "Byte Lab",
        icon: "src/images/favicon.png",
        start_url: "/"
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-130498987-1',
        head: true,
      }
    }
  ]
}
