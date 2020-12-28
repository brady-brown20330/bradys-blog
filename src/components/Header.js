import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
color: yellow;
font-family: limelight;
`
export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <Title>{siteTitle}</Title>
    <p>{siteDescription}</p>
  </Link>
);
