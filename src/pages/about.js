import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const AboutPage = () => {
  const pageTitle = "About Me"

  return (
    <Layout>
      <Seo title={pageTitle} />
      <Header pageTitle={pageTitle}></Header>
      <article>
        <p>
          I live in Memphis, TN with my wife, two children, and two dogs (go Grizz!). I work at <a href="https://www.ubiquisoft.com/">Ubiquisoft</a> as a frontend web developer.
        </p>
        <p>
          My passion for coding began at a legal tech company. I started working
          there as an attorney, but steadily got hooked on programming.
        </p>
        <p>
          In 2018 I enrolled in Flatiron's immersive software engineering
          bootcamp. It was an incredible experience where I learned JavaScript,
          React, Redux, Ruby, and Rails. I also got my first taste of pair
          programming and agile software development.
        </p>
      </article>

      <article>
        <h2>Around the web</h2>
        <section>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/EdwardAEzekiel">
                EdwardAEzekiel
            </a>
            </li>
            <li>
              GitHub: <a href="https://github.com/edezekiel">
                edezekiel
            </a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/edezekiel/">
                edezekiel
            </a>
            </li>
            <li>
              Email: <a href="mailto: ed.a.ezekiel@gmail.com">
                ed.a.ezekiel@gmail.com
            </a>
            </li>
          </ul>
        </section>
      </article>

    </Layout>
  )
}

export default AboutPage