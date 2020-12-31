import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components'
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { Social } from '../components/Social';
import { Footer } from '../components/Footer';



const IndexWrapper = styled.main`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PostWrapper = styled.div`

  border-radius: 5px;
`;

const Image = styled(Img)`
  max-height: 250px;
  border-radius: 5px 5px 0px 0px;
`;

const Divider = styled.div`
  margin: 15px;
  padding: 15px;
  font-family: Arvo;
  font-weight: bolder;
  display: flex;
  font-size: 36px;
  border-top: 2px groove azure;
`

export default ({data}) => {

  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
      />
      <Social />
      <Divider>Here are some posts that I wrote:</Divider>
    <IndexWrapper>
      {data.allMdx.nodes.map(
        ({ id, excerpt, frontmatter, fields }) => (
          <div>
                      <Divider />
          <PostWrapper key={id}>
            <Link to={fields.slug}>
            {
              !!frontmatter.cover ? (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
          </div>
        )
      )}
    </IndexWrapper>
    <Footer />
  </Layout>
  );
};

export const query = graphql`
query SITE_INDEX_QUERY {
  allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { published: { eq: true } } }
  ) {
    nodes {
      id
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
}
`;