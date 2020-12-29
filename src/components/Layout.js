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
    background-color:  #E5E5E5;
    color: #14213D;
    font-family: ubuntu;
  }
  a:link {
    color: #14213D;
  }
  a:visited {
    color: #14213D;
  }
`
const PostBodyWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
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