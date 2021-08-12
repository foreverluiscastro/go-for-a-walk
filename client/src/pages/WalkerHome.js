import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';
import WalkerAppointmentLink from '../components/WalkerAppointmentLink';

function WalkerHome({ user }) {
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
                    <h1>You have {appointments.length} upcoming Appointment.</h1>
                    {appointments.map((appointment) => (
                        <WalkerAppointmentLink key={appointment.id} appointment={appointment}/>
                    ))}
                    </>
                ) : (
                    <>
                    <h1>You have no Appointments yet. To create an appointment, you must first accept a job from the jobs posting page.</h1>
                    <Button as={Link} to="/walker-app/job-posts">
                        Find a Job!
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

export default WalkerHome;