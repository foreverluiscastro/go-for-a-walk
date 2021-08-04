import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';

function ClientDog(props) {
    const [dog, setDog] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`/dogs/${props.match.params.id}`)
        .then((r) => r.json())
        .then(setDog)
    }, [props.match.params.id]);

    const deleteDog = (id) => {
        fetch(`/dogs/${dog.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            history.push("/client-app/my-dogs")
        })
    }

    return (
        <Wrapper>
            <Box>
                <h1>{dog.name}</h1>
                <Button onClick={() => deleteDog(dog.id)}>
                    Remove Dog
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

export default ClientDog;