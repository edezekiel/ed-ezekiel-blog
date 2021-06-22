import React from "react"

const PostLinks = (props) => {
  return (
    <ul>
      {props.nodes.map(({ node }) => (
        <li key={node.id}>
          <a href={node.fields.slug} className="s">
            <h3><span>{node.frontmatter.date} </span>{node.frontmatter.title}</h3>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PostLinks