import * as React from "react"
import { container } from "./layout.module.css"
import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <main className={container}>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout;