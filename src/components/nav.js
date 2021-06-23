import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { 
  navLinks,
  navLinkItem,
  navLinkText,
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
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={siteTitle}>    
            {data.site.siteMetadata.title}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/" className={navLinkText}>Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/blog" className={navLinkText}>Blog</Link>
        </li>
        <li className={navLinkItem}>
          <Link to ="/about" className={navLinkText}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav