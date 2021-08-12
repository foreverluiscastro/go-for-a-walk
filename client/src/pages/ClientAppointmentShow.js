import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import { Link } from 'react-router-dom';

function ClientAppointmentShow(props) {
    const [appointment, setAppointment] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`/appointments/${props.match.params.id}`)
        .then((r) => r.json())
        .then(setAppointment);
    }, [props.match.params.id]);

    const deleteAppointment = (id) => {
        fetch(`/appointments/${appointment.id}`, {
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
                <h1>{appointment.number_of_dogs} {appointment.number_of_dogs > 1 ?  "dogs"  :  "dog" } at:</h1>
                <h2>{appointment.time} <b>On:</b> {appointment.date}</h2>
                <h2><b>Notes:</b> <i>"{appointment.notes}"</i></h2>
                <Button onClick={() => {deleteAppointment(appointment.id)}}>
                    Cancel Appointment
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

export default ClientAppointmentShow;