import React from "react"
import {
  postDate,
  postHeading,
  postLinks,
  postLink
} from "./postLinks.module.css"

const PostLinks = (props) => {
  return (
    <ul className={postLinks}>
      {props.nodes.map(({ node }) => (
        <li key={node.id} className={postLink}>
          <h2 className={postHeading}><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
          <div className={postDate}><time>{formatDate(node.frontmatter.date, node.frontmatter.year)}</time></div>
          <div>{node.excerpt}</div>
        </li>
      ))}
    </ul>
  )
}

export default PostLinks

function formatDate(date, year) {
  return `${date}, ${year}`
}