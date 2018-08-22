module.exports = {
  siteMetadata: {
    title: `TIL`
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
