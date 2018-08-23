import React from "react"
import {graphql} from "gatsby"

export default function Template({data}) {
  const {markdownRemark} = data;
  const {frontmatter,html} = markdownRemark;
  return (<div>
      <div>
        <a href="/">home</a>
      </div>
      <div>
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </div>)
}

export const pageQuery=graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
