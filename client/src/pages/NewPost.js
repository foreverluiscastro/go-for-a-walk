import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Error, FormField, Input, Label, Textarea } from '../styles';

function NewPost() {
    const [numberOfDogs, setNumberOfDogs] = useState("How many dogs will attend this trip?");
    const [time, setTime] = useState("How long should they be active?")
    const [notes, setNotes] = useState("Would you like your walker to know anything about your pet prior to meeting up?")

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

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
                <h2>Make A Post!</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="numberOfDogs">Number of Dogs</Label>
                        <Input
                        type="integer"
                        id="numberOfDogs"
                        value={numberOfDogs}
                        onChange={(e) => setNumberOfDogs(e.target.value)}
                        onClick={() => setNumberOfDogs("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="time">Trip Time in Minutes</Label>
                        <Input
                        type="integer"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        onClick={() => setTime("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="notes">Any Sidenotes or concerns?</Label>
                        <Input
                        type="text"
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        onClick={() => setNotes("")}
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
  background: #eee;
  border-radius: 6px;
  box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 25%),
    0 0 0 1px rgb(10 10 10 / 6%);
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewPost;