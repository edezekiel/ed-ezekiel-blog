import * as React from "react"
import { 
  container,
  footerBorder,
  footerItem
} from "./footer.module.css"

const Footer = () => {
  return (
    <>
    <hr className={footerBorder}></hr>
    <footer className={container}>
      <p className={footerItem}>
        <strong>© 2018-{new Date().getFullYear()}</strong>
        <br />
       Edward Ezekiel</p>
      <p className={footerItem}>
        <strong>Social</strong>
        <br />
        <a href="https://github.com/edezekiel" target="blank">GitHub</a> / 
        <a href="https://twitter.com/EdwardAEzekiel" target="blank">Twitter</a></p>
      <p className={footerItem}>
        <strong>This site</strong>
        <br />
        <a href="https://github.com/edezekiel/ed-ezekiel-blog">
          Source Code
        </a>
      </p>
      <p className={footerItem}>
        <strong>Built with</strong>
        <br />
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p className={footerItem}>
        <strong>Hosted by</strong>
        <br />
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
    </footer>
    </>
  )
}

export default Footer