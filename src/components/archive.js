import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
    order: DESC
    fields: [frontmatter___date]
  }){
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
  }
}`;

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  const {allMarkdownRemark} = data;

  return (
    <>
      <aside>
        <h3>archive</h3>
        <ArchiveList>
        { allMarkdownRemark.edges.map(edge => (
          <Link to={`posts${edge.node.frontmatter.slug}`} key={edge.node.frontmatter.slug}><li>{edge.node.frontmatter.title}</li></Link>
        )) }
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
