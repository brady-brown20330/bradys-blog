import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #FC7753;
  font-family: ubuntu;
  font-weight: bolder;
  font-style: oblique;
  text-decoration: #FC7753;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 42px;
`

const Subtitle = styled.p`
  color: azure;
  font-family: ubuntu;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
`
export const Header = ({ siteTitle, siteDescription }) => (
<div>
  <Link to="/">
    <Title>{siteTitle}</Title>
  </Link>
  <Subtitle>{siteDescription}</Subtitle>
</div>
);
