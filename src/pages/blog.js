import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostLinks from "../components/postLinks"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  const [currentTag, setCurrentTag] = useState(null)
  useEffect(() => {}, [currentTag])

  const filteredPosts = data.allMarkdownRemark.edges.filter(({ node }) => (
    currentTag
      ? node.frontmatter.tags.includes(currentTag)
      : true
  ));

  const sortedTags = data.allMarkdownRemark.group
    .sort((a, b) => b.totalCount - a.totalCount)

  return (
    <Layout pageTitle="My Blog Posts">
      <Seo title="Blog" />
      <h2 className="blogIntro">
        This blog is about programming, web development, and my journey from
        practicing law to loving code.
      </h2>

      <h1>Posts: {currentTag === null ? "All" : `${currentTag}`}</h1>
      <section className="postTags">
        <button onClick={() => setCurrentTag(null)}>all</button>
        {sortedTags.map(tag => (
          <button
            key={tag.fieldValue}
            value={tag.fieldValue}
            onClick={() => setCurrentTag(tag.fieldValue)}
          >
            {tag.fieldValue}
          </button>
        ))}
      </section>

      <section className="postLinks">
        <PostLinks nodes={filteredPosts}></PostLinks>
      </section>
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
            tags
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