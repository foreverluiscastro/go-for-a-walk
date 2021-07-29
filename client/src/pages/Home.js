import React from 'react'
import styled from 'styled-components';
import { Box, BoxButton } from '../styles';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Wrapper>
            <Logo>Go For A Walk.</Logo>
            <p>This</p>
            <Box>
                <BoxButton as={Link} to="/client-app">Need a walk?</BoxButton>
                <BoxButton as={Link} to="/walker-app">Feel like walking?</BoxButton>
            </Box>
        </Wrapper>
    )
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #00e0d7;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default Home;