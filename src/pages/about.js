import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const About = ({ data }) => {
    console.log(data)
    return (
      <div>
        <Layout>
          <h1>About page</h1>
        </Layout>
      </div>
    )
}
export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        size
        name
        extension
        ctime
      }
    }
  }
`
export default About