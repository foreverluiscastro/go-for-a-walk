import React from 'react';
import styled from 'styled-components';
import { Box } from '../styles';
import { Link } from 'react-router-dom';

function PostLink({ post }) {
    
    return (
        <Wrapper>
            <Box>
                <Link to={`/client-app/posts/${post.id}`}>
                    <h1>{post.client.username}</h1>
                    <h1>Needs a Walker for:</h1>
                    <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes.</h1>
                </Link>
                <p><i>To edit or cancel this post, click on the link.</i></p>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

export default PostLink;