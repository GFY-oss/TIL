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
          date(formatString: "YYYY/MM/DD")
        }
        excerpt(pruneLength: 5)
      }
    }
  }
}	`).then(result => {
  if(result.errors)
    Promise.reject(result.errors);
    let posts=  result.data.allMarkdownRemark.edges.sort((a,b)=> new Date(a.node.frontmatter.date.split('/')) - new Date(b.node.frontmatter.date.split('/')) );
    posts.forEach(({ node },index,edges) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {
        prevLink:edges[index-1]?edges[index-1].node.frontmatter.path:null,
        nextLink:edges[index+1]?edges[index+1].node.frontmatter.path:null
        } // additional data can be passed via context
      })
    })
})
}
