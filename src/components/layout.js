/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import InteractiveBackground from "./interactive-bg/interactiveBackground"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="w-screen h-screen absolute top-0 z-0 ">
        <InteractiveBackground className="w-screen h-screen "></InteractiveBackground>
      </div>

      <div className="relative h-screen overflow-y-auto">

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
            >
            © {new Date().getFullYear()} &middot; Had a lot of fun building this site with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a> 
            <br></br>
            theres a lot to do here, but have this for now :)
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
