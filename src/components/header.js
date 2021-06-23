import * as React from "react"
import { heading } from "./header.module.css"

const Header = ({ pageTitle, children }) => {
  return (
    <header>
      <h1 className={heading}>{pageTitle}</h1>
      { children }
    </header>
  )
}

export default Header