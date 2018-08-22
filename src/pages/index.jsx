import React from "react";
import {graphql} from "gatsby";

export default ({data}) => {
  const {site,allMarkdownRemark} = data;
  const posts = allMarkdownRemark.edges;
  const listOfPosts = posts.map(post=>{
    return <li>{post.node.frontmatter.title}</li>;
  })
  return <div>
    <header>
      <h1>{site.siteMetadata.title}</h1>
    </header>
    <section>
      <ul>{listOfPosts}</ul>
    </section>
  </div>;
}

export const pageQuery = graphql`
  query Site {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit:100) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;
