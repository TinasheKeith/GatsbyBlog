import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import React from "react"

import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;

  img {
    margin-bottom: 0;
    width: 35px;
    height: auto;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={gatsbyLogo} alt="gatsby logo"/>
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
