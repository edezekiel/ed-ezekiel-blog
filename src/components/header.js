import * as React from "react"

const Header = ({ pageTitle, children }) => {
  return (
    <header>
      <h1>{pageTitle}</h1>
      { children }
    </header>
  )
}

export default Header