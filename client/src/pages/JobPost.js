import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import '../App.css';

function JobPost(props) {
    const [post, setPost] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`/posts/${props.match.params.id}`)
        .then((r) => r.json())
        .then(setPost);
    }, [props.match.params.id]);
    
    const deletePost = (id) => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            history.push("/walker-app/my-appointments")
        })
    }
    
    return (
        <Wrapper>
            <Box>
                <h1><b>Name: {post.client.first_name} {post.client.last_name}</b></h1>
                <img src={post.client.image_url} alt="" className="profile-picture"/>
                <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes</h1>
                <h2>At: {post.time}</h2>
                <h2>On: {post.date}</h2>
                <h3><i>"{post.notes}"</i></h3>
                <Button onClick={() => deletePost(post.id)}>
                    Accept Job
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

export default JobPost;