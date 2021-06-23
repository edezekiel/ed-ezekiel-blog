import * as React from "react"
import { heading } from "./header.module.css"

const Header = ({ pageTitle }) => {
  return (
    <header>
      <h1 className={heading}>{pageTitle}</h1>
    </header>
  )
}

export default Header