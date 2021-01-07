import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  margin-left: 5em;
  margin-right: 5em;
`

const LinkImg = styled.img`
  height: 50px;
  width: auto;
  display: block;
  margin: 0 auto;
`

export const Social = () => {
  return (
    <LinkContainer>

    <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brady-c-brown/">
      <LinkImg src="https://social-link-icons.s3.us-east-2.amazonaws.com/LI-In-Bug.png" alt="Linkedin"/>
    </Link>

    <Link target="_blank" rel="noreferrer" href="https://social-link-icons.s3.us-east-2.amazonaws.com/Brady+Brown's+Resume.pdf">
      <LinkImg src="https://social-link-icons.s3.us-east-2.amazonaws.com/pdf-icon-png-10.png" alt="Resume"/>
    </Link>

    <Link target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=brownb202@gmail.com&su=Hey Brady&body=Hey Brady, I was just looking at your portfolio site and I think it\'s really Neat!"
     onClick={function() {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=brownb202@gmail.com&su=Hey Brady&body=Hey Brady, I was just looking at your portfolio site and I think it\'s really Neat!',
      'newwindow',
      'width=500,height=600');
       return false;
     }}
    >
      <LinkImg src="https://social-link-icons.s3.us-east-2.amazonaws.com/gmail-image.png" alt="Email Me!"/>
    </Link>

    <Link target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/brady-brown">
      <LinkImg src="https://social-link-icons.s3.us-east-2.amazonaws.com/Strava_logo-512.png" alt="Race Me!"/>
    </Link>
    </LinkContainer>
  )
}