import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import { createGlobalStyle } from 'styled-components'

const AppStyles = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #F3F3F3;
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
  background-color: #FFFFFF;
  border-radius: 5px;
  max-width: 85%;
  margin: auto;
  padding: 10px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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