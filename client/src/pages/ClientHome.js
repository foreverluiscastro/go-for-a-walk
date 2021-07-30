import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Box, Button } from '../styles';
import PostLink from '../components/PostLink';
import { Link } from 'react-router-dom';

function ClientHome({ user }) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then(setPost);
    }, []);

    return (
        <Wrapper>
            <Box>
                <h1>Hello, {user.username}.</h1>
                {console.log(user)}
                {!!post ? (
                    post.map((post) => (
                        <PostLink key={post.id} post={post}/>
                    ))
                ) : (
                    <>
                    <h2>You have no posts yet.</h2>
                    <Button as={Link} to="/client-app/new-post">
                        Need a Walker?
                    </Button>
                    </>
                )}
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
`;

export default ClientHome;