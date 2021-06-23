import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  navLinks,
  navLinkItem,
  navLink
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
    <header className={container}>
      <div>
        <Link to="/" className={navLink}>    
          Ed Ezekiel
        </Link>
      </div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to ="/" className={navLink}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to ="/blog" className={navLink}>Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link to ="/about" className={navLink}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav