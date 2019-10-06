import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
    order: DESC
    fields: [frontmatter___date]
  }){
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    color: #000;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
  }

  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }

`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render = {({ allMarkdownRemark }) => (
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`posts${node.frontmatter.slug}`}>read more</Link>
        </Post>
      ))
    )}
  />

);

export default Listing
