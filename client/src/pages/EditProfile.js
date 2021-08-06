import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Error, FormField, Input, Label, Textarea } from '../styles';

function EditProfile() {
    const [profile, setProfile] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetch('/client')
        .then((r) => r.json())
        .then(setProfile);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch('/client', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: profile.username,
                first_name: profile.first_name,
                last_name: profile.last_name,
                image_url: profile.image_url,
                age: profile.age,
                bio: profile.bio,
                city: profile.city,
                state: profile.state
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
                <h2>Edit Your Profile</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="username">Username:</Label>
                        <Input
                        type="text"
                        id="username"
                        value={profile.username}
                        onChange={(e) => setProfile({ username: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="first_name">First Name:</Label>
                        <Input
                        type="text"
                        id="first_name"
                        value={profile.first_name}
                        onChange={(e) => setProfile({ first_name: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="last_name">Last Name:</Label>
                        <Input
                        type="text"
                        id="last_name"
                        value={profile.last_name}
                        onChange={(e) => setProfile({ last_name: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="age">Age:</Label>
                        <Input
                        type="integer"
                        id="age"
                        value={profile.age}
                        onChange={(e) => setProfile({ age: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="image_url">Profile Picture:</Label>
                        <Input
                        type="text"
                        id="image_url"
                        value={profile.image_url}
                        onChange={(e) => setProfile({ image_url: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="city">City:</Label>
                        <Input
                        type="text"
                        id="city"
                        value={profile.city}
                        onChange={(e) => setProfile({ city: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="state">State:</Label>
                        <Input
                        type="text"
                        id="state"
                        value={profile.state}
                        onChange={(e) => setProfile({ state: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="bio">Bio:</Label>
                        <Textarea
                        type="text"
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ bio: e.target.value })}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Submit Edit"}
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

export default EditProfile;