import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Button } from '../styles';

function WalkerAppointment(props) {
    const [appointment, setAppointment] = useState([]);
    const history = useHistory();


    useEffect(() => {
        fetch(`/appointments/${props.match.params.id}`)
        .then((r) => r.json())
        .then(setAppointment);
    }, [props.match.params.id]);

    console.log(props)

    const deleteAppointment = (id) => {
        fetch(`/appointments/${appointment.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            history.push("/walker-app")
        })
    }


    return (
        <Wrapper>
            <Box>
                <h1>{appointment.number_of_dogs} dog(s) for {appointment.trip_time_in_minutes} minutes</h1>
                <h2>At: {appointment.time}</h2>
                <h2>On: {appointment.date}</h2>
                <h3><i>"{appointment.notes}"</i></h3>
                <Button onClick={() => deleteAppointment(appointment.id)}>
                    Job Completed
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

export default WalkerAppointment;