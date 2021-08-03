import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { useHistory } from 'react-router';

function ClientPost({ post }) {
    const history = useHistory();
    
    const postTime = post.time;

    function convertTime(postTime) {
        const time = postTime.split("T")[1].split(".")[0].split(":").slice(0, -1)
        if (time.length > 1) {
            time[2] = time[0] < 12 ? "AM" : "PM" ;
            time[0] = time[0] > 12 ? time[0] -12 : time[0];
            time.splice(1, 0, ":")
        }
        return time.join("")
    }

    const deletePost = (id) => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            history.push("/client-app")
        })
    }

    return (
        <Wrapper>
            <Box>
                <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes</h1>
                <h2>At: {convertTime(postTime)}</h2>
                <h3>On: {post.date}</h3>
                <Button onClick={() => deletePost(post.id)}>
                    Cancel Post
                </Button>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

export default ClientPost;