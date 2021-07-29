import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '../styles';

function ClientProfile({ user }) {
    return (
        <Wrapper>
            <Box>
                <h1>{user.username}</h1>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
`;

export default ClientProfile;