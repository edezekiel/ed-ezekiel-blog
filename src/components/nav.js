import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  navLinks,
  navLinkItem,
  siteTitle
 } from "./nav.module.css"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav className={container}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={siteTitle}>    
            {data.site.siteMetadata.title}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/">Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/blog">Blog</Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav