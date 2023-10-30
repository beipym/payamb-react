import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroBlock from "../components/home/introBlock"


const IndexPage = () => {

  let hide = false;
  function setHide (){ hide = !hide; console.log('cc')}
  const dom = (
    <Layout>

      <button onClick={setHide}> hide </button>
      
    </Layout>
    )

  return dom;
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
