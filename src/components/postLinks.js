import React from "react"

const PostLinks = (props) => {
  return (
    <ul>
      {props.nodes.map(({ node }) => (
        <li key={node.id}>
          <a href={node.fields.slug} >
            <h3>{node.frontmatter.title}</h3>
            <time>{formatDate(node.frontmatter.date, node.frontmatter.year)}</time>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PostLinks

function formatDate(date, year) {
  return `${date}, ${year}`
}