import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: ubuntu;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 42px;
`

const Subtitle = styled.p`
  font-family: Ubuntu;
  display: flex;
  justify-content: center;
  text-align: center;
`

const HeaderWrapper = styled.div`
  text-decoration: none !important;
`

export const Header = ({ siteTitle, siteDescription }) => (
<HeaderWrapper>
  <Link style={{textDecoration: 'none'}}to="/">
    <Title>{siteTitle}</Title>
    <Subtitle>{siteDescription}</Subtitle>
  </Link>

</HeaderWrapper>
);
