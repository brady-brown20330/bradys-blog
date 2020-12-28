import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Layout } from '../components/Layout';
import SEO from 'react-seo-component';
import styled from 'styled-components';

const IndexWrapper = styled.main`
`;

const PostWrapper = styled.div`
`;

const Image = styled(Img)`
  border-radius: 5px;
`;

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
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brady-c-brown/">
        <img src="https://social-link-icons.s3.us-east-2.amazonaws.com/LI-In-Bug.png" style={{width:"50px", height:"40px"}} alt="Linkedin"/>
      </a>

      <a target="_blank" rel="noreferrer" href="https://social-link-icons.s3.us-east-2.amazonaws.com/Brady's+Resume.pdf">
        <img src="https://social-link-icons.s3.us-east-2.amazonaws.com/pdf-icon.png" style={{width:"50px", height:"40px"}} alt="Resume"/>
      </a>

      <a target="_blank" rel="noreferrer"
       onClick={function() {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=brownb202@gmail.com&su=Hey Brady&body=Hey Brady, I was just looking at your portfolio site and I think it\'s really Neat!',
        'newwindow',
        'width=500,height=600');
         return false;
       }}
      >
        <img src="https://social-link-icons.s3.us-east-2.amazonaws.com/email-image.png" style={{width:"50px", height:"40px"}} alt="Email Me!"/>
      </a>

      <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/brady-brown">
        <img src="https://social-link-icons.s3.us-east-2.amazonaws.com/Strava_logo-512.png" style={{width:"50px", height:"40px"}} alt="Race Me!"/>
      </a>

    <IndexWrapper>
      {data.allMdx.nodes.map(
        ({ id, excerpt, frontmatter, fields }) => (
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
        )
      )}
    </IndexWrapper>
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