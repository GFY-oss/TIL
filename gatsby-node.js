const path=require("path")

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  const blogTemplate = path.resolve(`src/templates/blogPost.jsx`);
  return graphql(`query Posts {
  allMarkdownRemark(limit:100) {
    edges {
      node {
        frontmatter {
          title
          path
        }
        excerpt(pruneLength: 5)
      }
    }
  }
}	`).then(result => {
  if(result.errors)
    Promise.reject(result.errors);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {}, // additional data can be passed via context
      })
    })
})
}
