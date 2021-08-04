import React from 'react';
import styled from 'styled-components';
import { Box, Label } from '../styles';
import { Link } from 'react-router-dom';

function DogLink({ dog }) {
    return (
        <Wrapper>
            <Box>
                <Link to={`/client-app/my-dogs/${dog.id}`}>
                    <h1>{dog.name}</h1>
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

export default DogLink;