import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostLinks from '../components/postLinks'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <PostLinks nodes={data.allMarkdownRemark.edges}></PostLinks>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD")
            year:date(formatString: "YYYY")
          }
          fields {
            slug
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default BlogPage