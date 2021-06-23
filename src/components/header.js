import * as React from "react"
import { header, heading } from "./header.module.css"

const Header = ({ pageTitle, children }) => {
  return (
    <header className={header}>
      <h1 className={heading}>{pageTitle}</h1>
      { children }
    </header>
  )
}

export default Header