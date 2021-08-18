import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Error, FormField, Input, Label, Textarea } from '../styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

function EditPost(props) {
    const [time, setTime] = useState('10:00');
    const [date, setDate] = useState(new Date());
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`/posts/${props.match.params.id}`)
        .then((r) => r.json())
        .then(setPost);
    }, [props.match.params.id])
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/posts/${props.match.params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                date: post.date,
                time: post.time,
                trip_time_in_minutes: post.trip_time_in_minutes,
                number_of_dogs: post.number_of_dogs,
                notes: post.notes
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/client-app");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return (
        <Wrapper>
            <WrapperChild>
                <h2>Edit Your Post!</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label>Appointment date</Label>
                        <DatePicker selected={date} onChange={date => setDate(date)}/>
                    </FormField>
                    <FormField>
                        <Label>Pick-up Time</Label>
                        <TimePicker onChange={setTime} value={time}/>
                    </FormField>
                    <FormField>
                        <Label htmlFor="numberOfDogs">Number of Dogs</Label>
                        <Input
                        type="integer"
                        id="numberOfDogs"
                        value={post.number_of_dogs}
                        onChange={(e) => setPost({ number_of_dogs: e.target.value})}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="time">Trip Time in Minutes</Label>
                        <Input
                        type="integer"
                        id="time"
                        value={post.trip_time_in_minutes}
                        onChange={(e) => setPost({ trip_time_in_minutes: e.target.value})}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="notes">Any Sidenotes or concerns?</Label>
                        <Textarea
                        type="text"
                        id="notes"
                        value={post.notes}
                        onChange={(e) => setPost({ notes: e.target.value})}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Submit Post"}
                            </Button>
                            </FormField>
                            <FormField>
                                {errors.map((err) => (
                                <Error key={err}>{err}</Error>
                                ))}
                    </FormField>
                </form>
            </WrapperChild>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
  border-radius: 6px;
  box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 8%),
    0 0 0 1px rgb(10 10 10 / 6%);
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default EditPost;