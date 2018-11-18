import React from "react"
import {graphql} from "gatsby"

export default function Template({data,pageContext}) {
  const {markdownRemark} = data;
  const {frontmatter,html} = markdownRemark;
  console.log(process.env.APP_URL,pageContext.prevLink);
  return (<div>
      <div>
        <a href={process.env.APP_URL}>home</a>
      </div>
      <div>
        <h4>{frontmatter.date} - {frontmatter.title}</h4>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        {pageContext.prevLink && <a href={process.env.APP_URL+pageContext.prevLink} > &lt;</a> }
        {pageContext.nextLink && <a href={process.env.APP_URL+pageContext.nextLink} > &gt;</a> }
      </div>
    </div>)
}

export const pageQuery=graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
