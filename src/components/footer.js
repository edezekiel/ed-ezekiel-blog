import * as React from "react"
import { container } from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={container}>
      <p>© 2018-{new Date().getFullYear()} Edward Ezekiel</p>
      <p>
        <a href="https://github.com/edezekiel/ed-ezekiel-blog">
          Source Code
        </a>
      </p>
      <p>
        Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p>
        Hosted by{' '}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
    </footer>
  )
}

export default Footer