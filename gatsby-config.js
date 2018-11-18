module.exports = {
  siteMetadata: {
    title: `TIL`,
    pathPrefix: `/til-sites`
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
  ],
}
