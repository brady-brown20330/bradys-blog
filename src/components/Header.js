import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Arvo;
  font-weight: bolder;
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 42px;
`

const Subtitle = styled.p`
  font-family: Arvo;
  display: flex;
  justify-content: center;
  text-align: center;
`

const HeaderWrapper = styled.div`
  text-decoration: none !important;
`

export const Header = ({ siteTitle, siteDescription }) => (
<HeaderWrapper>
  <Link to="/">
    <Title>{siteTitle}</Title>
    <Subtitle>{siteDescription}</Subtitle>
  </Link>

</HeaderWrapper>
);
