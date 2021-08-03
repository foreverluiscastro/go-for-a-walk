import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';
import ClientPost from '../components/ClientPost';

function ClientHome({ user }) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then(setPost)
    }, []);

    return (
        <Wrapper>
            <Box>
                <h1>Hello, {user.username}.</h1>
                {post.length > 0 ? (
                    <>
                    <h1>You have {post.length} post pending walker.</h1>
                    {post.map((post) => (
                        <ClientPost key={post.id} post={post}/>
                    ))}
                    </>
                ) : (
                    <>
                    <h1>You have no posts yet.</h1>
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