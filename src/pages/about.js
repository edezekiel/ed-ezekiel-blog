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
          I live in Memphis, TN with my wife, two children, and two dogs. I work
          at <a href="https://herodevs.com/">HeroDevs</a> as a Senior Angular 
          Engineer. In my free time I love watching the Memphis Grizzlies and
          reading science fiction books.
        </p>
        <p>
          My passion for coding began at a legal tech company in Atlanta, GA. I 
          worked there as an attorney but picked up bits and pieces of 
          coding skills from programmers at the company.
        </p>
        <p>
          In 2018, I enrolled in Flatiron's immersive software engineering
          bootcamp. I learned JavaScript, React, Redux, Ruby, and Rails. I also 
          conducted pair programming and practiced agile software development.
        </p>
        <p>After graduating from Flatiron I moved to Memphis, TN. I joined 
          Ubiquisoft Technologies as a frontend developer and built Angular 
          applications for enterprise clients.
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