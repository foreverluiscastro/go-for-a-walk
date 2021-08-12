import React from 'react';
import styled from 'styled-components';
import { Box } from '../styles';
import { Link } from 'react-router-dom';
import '../App.css';

function ClientAppointmentLink({ appointment }) {

    return (
        <Wrapper>
            <Box>
                <Link to={`/client-app/my-appointments/${appointment.id}`}>
                    <h1>{appointment.walker.username} has accepted your post!</h1>
                    <img src={appointment.walker.image_url} alt="" className="link-avatar"/>
                    <h2><b>Name:</b> {appointment.walker.first_name} {appointment.walker.last_name}</h2>
                    <p><b>Age:</b> {appointment.walker.age}</p>
                    <p><b>Bio:</b> {appointment.walker.bio}</p>
                    <h1>Will be walking your {appointment.number_of_dogs > 1 ?  "dogs"  :  "dog" } at:</h1>
                    <h2>{appointment.time}<b>On:</b> {appointment.date}</h2>
                </Link>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
`;

export default ClientAppointmentLink;