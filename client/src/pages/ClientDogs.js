import React, { useEffect, useState } from 'react';
import { Box, Button } from '../styles';
import styled from 'styled-components';
import DogLink from '../components/DogLink';
import { Link } from 'react-router-dom';

function ClientDogs({ user }) {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch("/my-dogs")
        .then((r) => r.json())
        .then(setDogs);
    }, [])

    return (
        <Wrapper>
            <Box>
                {dogs.length > 0 ? (
                    dogs.map((dog) => (
                        <DogLink />
                    ))
                ) : (
                    <>
                    <h2>You have not added a dog yet! Adding your dog allows your walker the opportunity to get to know your pet.</h2>
                    <Button as={Link} to="/Client-app/new-dog">
                        Add Your Dog!
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

export default ClientDogs;