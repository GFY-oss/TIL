import React from "react";
import {graphql} from "gatsby";

export default ({data}) => {
  const {site,allMarkdownRemark} = data;
  const posts = allMarkdownRemark.edges.sort((a,b)=> new Date(a.node.frontmatter.date.split('/')) - new Date(b.node.frontmatter.date.split('/')) );

  const prefixPath=(path)=>{
    console.log(process.env);
    console.log(process.env.APP_URL,path);
    return process.env.APP_URL+path
  };
  const listOfPosts = posts.map(post=>{
    return <li>
      <a href={prefixPath(post.node.frontmatter.path)}>
        {post.node.frontmatter.date} - {post.node.frontmatter.title}
      </a>
    </li>;
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
        pathPrefix
      }
    }
    allMarkdownRemark(limit:100) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "YYYY/MM/DD")
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;
