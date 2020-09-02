import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`



// import React from "react"
// // import Header from "../components/header" // imports header as a component
// import Layout from "../components/layout"

// export default function About() {
//   return (
//     <Layout>
//       <h2>About Pagesgir</h2>
//       <p>Such wow. Very React.</p>
//     </Layout>
//   )
// }