import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';
import ClientAppointmentLink from '../components/ClientAppointmentLink';

function ClientAppointments({ user }) {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch("/appointments")
        .then((r) => r.json())
        .then(setAppointments)
    }, []);

    return (
        <Wrapper>
            <Box>
                <h1>Hello, {user.username}.</h1>
                {appointments.length > 0 ? (
                    <>
                    <h1>You have {appointments.length} upcoming appointment </h1>
                    {appointments.map((appointment) => (
                        <ClientAppointmentLink key={appointment.id} appointment={appointment}/>
                    ))}
                    </>
                ) : (
                    <>
                    <h1>You have no appointments yet. Once a Walker has accepted your post, an appointment will be scheduled, and all of the associated information will appear here.</h1>
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

export default ClientAppointments;