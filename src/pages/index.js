import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostLinks from "../components/postLinks"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Hi, I'm Ed Ezekiel">
      <Seo title="Home"/>
      <section className="heroBanner">
        <p>
          I'm a frontend web developer and former attorney. Welcome to my web 
          development blog. Find me <Link to="/about" id="nav-me">around the web</Link>.
        </p>
      </section>

      <section className="latestPosts">
        <h2>Recent Posts</h2>
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