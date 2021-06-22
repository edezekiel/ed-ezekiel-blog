import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1 className="postShowPageTitle">{post.frontmatter.title}</h1>
      <article>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`