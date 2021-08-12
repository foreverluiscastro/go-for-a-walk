import React from 'react';
import styled from 'styled-components';
import { Box } from '../styles';
import { Link } from 'react-router-dom';
import '../App.css';

function WalkerAppointmentLink({ appointment }) {
    
    return (
        <Wrapper>
            <Box>
                <Link to={`/walker-app/my-appointments/${appointment.id}`}>
                    <h1>{appointment.client.username}</h1>
                    <img src={appointment.client.image_url} alt="" className="link-avatar"/>
                    <h1>{appointment.client.first_name} {appointment.client.last_name}</h1>
                    <p><b>Age:</b>{appointment.client.age}</p>
                    <h1>{appointment.number_of_dogs} dog(s) for {appointment.trip_time_in_minutes} minutes.</h1>
                    <p><b>Notes:</b> {appointment.notes}</p>
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

export default WalkerAppointmentLink;