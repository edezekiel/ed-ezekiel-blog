import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import PostLinks from "../components/postLinks"
import { recentPosts, subtitle } from "./index.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home"/>
      <Header pageTitle="Hi, I'm Ed Ezekiel">
        <p className={subtitle}>
          I'm a frontend web developer and former attorney. Welcome to my web 
          development blog. Find me <Link to="/about" id="nav-me">around the web</Link>.
        </p>
      </Header>

      <section>
        <h2 className={recentPosts}>Recent Posts:</h2>
          <PostLinks nodes={data.allMarkdownRemark.edges.slice(0, 5)}></PostLinks>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogsQuery {
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage