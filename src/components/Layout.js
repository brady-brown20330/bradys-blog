import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import { createGlobalStyle } from 'styled-components'

const AppStyles = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    color: black;
    font-family: Ubuntu;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
`
const PostBodyWrapper = styled.div`
  
  max-width: 85%;
  margin: auto;
  padding: 10px;

  `
export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
<div>
<AppStyles/>
          <Header siteTitle={title} siteDescription={description} />
          <PostBodyWrapper>
            {children}
          </PostBodyWrapper>
</div>
  );
};