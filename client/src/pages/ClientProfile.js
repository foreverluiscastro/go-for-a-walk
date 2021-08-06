import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';

function ClientProfile({ user }) {

    console.log(user)

    return (
        <Wrapper>
                <h1>{user.username}</h1>
                <h2>{user.first_name} {user.last_name}</h2>
                <img src={user.image_url} alt=""/>
                <p>
                    <em><b>Age:</b>{user.age}</em>
                    &nbsp;·&nbsp;
                    <em><b>City:</b>{user.city}</em>
                    &nbsp;·&nbsp;
                    <em><b>State:</b>{user.state}</em>
                </p>
                <Button as={Link} to={'/client-app/my-profile/edit'}>
                    Edit Profile
                </Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
`;

export default ClientProfile;