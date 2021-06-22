import * as React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <section className="heroBanner">
        <h1>Hi, I'm Ed Ezekiel.</h1>
        <p>
          I'm a frontend web developer and former attorney. Welcome to my web 
          development blog. Find me <Link to="/about" id="nav-me">around the web</Link>.
        </p>
      </section>

      <section className="latestPosts">
        <h2>Recent Posts</h2>
        <ul>
          {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
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