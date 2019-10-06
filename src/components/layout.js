import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import Archive from './archive'
import Header from "./header"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: {
        regex: "/bg/"
      }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
		}
  }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <MainLayout>
          { location.pathname === '/' && <Img fluid={data.file.childImageSharp.fluid} />}
          <div>
            {children}   
          </div>
         <Archive />
        </MainLayout>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {}
}

export default Layout
