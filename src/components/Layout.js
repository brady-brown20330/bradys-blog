import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import { createGlobalStyle } from 'styled-components'

const AppStyles = createGlobalStyle`
  body {
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #22223B;
    color: white;
  }
  a:link {
    color: #B3C2F2;
  }
  a:visited {
    color: #4A4E69;
  }
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
    <AppStyles/>
          <Header siteTitle={title} siteDescription={description} />
          {children}
    </div>
  );
};