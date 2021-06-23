import * as React from "react"
import { container, footerItem } from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={container}>
      <p className={footerItem}>© 2018-{new Date().getFullYear()} Edward Ezekiel</p>
      <p className={footerItem}>
        <a href="https://github.com/edezekiel/ed-ezekiel-blog">
          Source Code
        </a>
      </p>
      <p className={footerItem}>
        Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p className={footerItem}>
        Hosted by{' '}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
    </footer>
  )
}

export default Footer