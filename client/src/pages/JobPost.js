import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { FormField, Button, Error } from '../styles';
import '../App.css';

function JobPost(props) {
    const [post, setPost] = useState([]);
    const [errors, setErrors] = useState([]);
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
            history.push("/walker-app")
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: post.client.id,
                date: post.date,
                time: post.time,
                trip_time_in_minutes: post.trip_time_in_minutes,
                number_of_dogs: post.number_of_dogs,
                notes: post.notes
            })
        }).then((r) => {
            if (r.ok) {
                history.push("/walker-app");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes</h1>
                <h2>At: {post.time}</h2>
                <h2>On: {post.date}</h2>
                <h3><i>"{post.notes}"</i></h3>
                <Button color="primary" type="submit" onClick={() => deletePost(post.id)}>
                    Accept Job
                </Button>
                
                <FormField>
                    {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                    ))}
                </FormField>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

export default JobPost;