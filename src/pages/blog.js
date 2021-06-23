import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import PostLinks from "../components/postLinks"
import { blogPosts, button, postTags } from "./blog.module.css"

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
  
  const pageTitle = "Blog"
  
  return (
    <Layout>
      <Seo title={pageTitle} />
      <Header pageTitle={pageTitle}>
        <p>This blog is about programming, web development, and my journey from practicing law to loving code.</p>
      </Header>
      <h2>Posts: {currentTag === null ? "All" : `${currentTag}`}</h2>
      <section className={postTags}>
        <button className={button} onClick={() => setCurrentTag(null)}>all</button>
        {sortedTags.map(tag => (
          <button
            key={tag.fieldValue}
            className={button}
            value={tag.fieldValue}
            onClick={() => setCurrentTag(tag.fieldValue)}
          >
            {tag.fieldValue}
          </button>
        ))}
      </section>

      <section className={blogPosts}>
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
          excerpt
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