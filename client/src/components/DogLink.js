import React from 'react';
import styled from 'styled-components';
import { Box, Label } from '../styles';
import { Link } from 'react-router-dom';
import '../App.css';

function DogLink({ dog }) {
    return (
        <Wrapper>
            <Box>
                <Link to={`/client-app/dogs/${dog.id}`}>
                    <img className="thumbnail" src={dog.img_url} alt=""/>
                    <Logo>{dog.name}</Logo>
                </Link>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

const Logo = styled.h1`
  font-family: "Fredoka One";
  font-size: 40px;
  color: purple;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default DogLink;