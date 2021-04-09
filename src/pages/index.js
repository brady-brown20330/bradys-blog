import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { Social } from '../components/Social';
import { Footer } from '../components/Footer';



const IndexWrapper = styled.main`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PostWrapper = styled.div`
  // padding: 15px;
  position: relative;
  background: white;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
  color: white;
  box-shadow: 20px 20px rgba(0,0,0,.15);
  transition: all .4s ease;
  &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px rgba(0,0,0,.25);
  }
`;



const Image = styled(Img)`
  max-height: 250px;
  border-radius: 5px 5px 0px 0px;
`;

const Divider = styled.div`
  margin: 15px;
  padding: 15px;
  font-family: Ubuntu;
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
                      {/* <Divider /> */}
          <PostWrapper key={id}>
            <Link style={{textDecoration: 'none'}} to={fields.slug}>
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
    {/* <Footer /> */}
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
        date(formatString: "D MMMM YYYY")
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