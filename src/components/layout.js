import * as React from "react"
import { container } from "./layout.module.css"
import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Nav></Nav>
      <main className={container}>
        <Header pageTitle={pageTitle}></Header>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout;