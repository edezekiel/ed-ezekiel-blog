import React from "react"
import { postLinks, postLink } from "./postLinks.module.css"

const PostLinks = (props) => {
  return (
    <ul className={postLinks}>
      {props.nodes.map(({ node }) => (
        <li key={node.id} className={postLink}>
          <h2><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
          <div><time>{formatDate(node.frontmatter.date, node.frontmatter.year)}</time></div>
          {/* <div>Excerpt</div> */}
        </li>
      ))}
    </ul>
  )
}

export default PostLinks

function formatDate(date, year) {
  return `${date}, ${year}`
}