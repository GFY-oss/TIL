import React from "react"
import {graphql} from "gatsby"

export default function Template({data,pageContext}) {
  const {markdownRemark} = data;
  const {frontmatter,html} = markdownRemark;
  return (<div>
      <div>
        <a href="/">home</a>
      </div>
      <div>
        <h4>{frontmatter.date} - {frontmatter.title}</h4>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        {pageContext.prevLink && <a href={pageContext.prevLink} > &lt;</a> }
        {pageContext.nextLink && <a href={pageContext.nextLink} > &gt;</a> }
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
