import React from 'react';
import styled from 'styled-components';
import { Box } from '../styles';
import { Link } from 'react-router-dom';
import '../App.css';

function WalkerPostLink({ post }) {
    
    return (
        <Wrapper>
            <Box>
                <Link to={`/walker-app/job-posts/${post.id}`}>
                    <h1>{post.client.username}</h1>
                    <img src={post.client.image_url} alt="" className="link-avatar"/>
                    <h1>{post.client.first_name} {post.client.last_name}</h1>
                    <p><b>Age:</b>{post.client.age}</p>
                    <h1>Needs a Walker for:</h1>
                    <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes.</h1>
                    <p><b>Notes:</b> {post.notes}</p>
                </Link>
                <p><i>To Accept this job, click on the link.</i></p>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

export default WalkerPostLink;