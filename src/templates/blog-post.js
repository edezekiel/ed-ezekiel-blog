import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const pageTitle = post.frontmatter.title

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <Header pageTitle={pageTitle}></Header>
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