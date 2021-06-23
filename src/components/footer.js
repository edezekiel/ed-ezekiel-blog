import * as React from "react"

const Footer = (props) => {
  return (
    <footer>
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