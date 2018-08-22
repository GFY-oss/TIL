module.exports = {
  siteMetadata: {
    title: `craftybones`
  },
  plugins:[
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`
  ]
}
