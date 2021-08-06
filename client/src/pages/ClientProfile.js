import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles';
import { Link } from 'react-router-dom';
import '../App.css';

function ClientProfile({ user }) {

    console.log(user)

    return (
        <Wrapper>
                <h1>{user.username}</h1>
                <h2>{user.first_name} {user.last_name}</h2>
                <img src={user.image_url} alt="" className="profile-picture"/>
                <p>
                    <em><b>Age:</b>{user.age}</em>
                    &nbsp;·&nbsp;
                    <em><b>City:</b>{user.city}</em>
                    &nbsp;·&nbsp;
                    <em><b>State:</b>{user.state}</em>
                    <p><b>Bio:</b> {user.bio}</p>
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