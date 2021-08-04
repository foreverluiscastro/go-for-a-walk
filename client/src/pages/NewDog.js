import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from '../styles';

function NewDog() {
    const [name, setName] = useState("What's your dog's name?");
    const [img_url, setImgUrl] = useState("Add an Image Link for your dog.");
    const [age, setAge] = useState("How old is your dog?");
    const [sex, setSex] = useState("What sex is the dog?");
    const [breed, setBreed] = useState("What breed or mix is your dog?");
    const [temperment, setTemperment] = useState("How would you describe your dog's overall temperment?");
    const [personality, setPersonality] = useState("How would you best describe your dog to a stranger?");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                age,
                sex,
                breed,
                temperment,
                personality
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/client-app/my-dogs");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Add A Dog!</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onClick={() => setName("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="imgUrl">Picture</Label>
                        <Input
                        type="text"
                        id="imgUrl"
                        value={img_url}
                        onChange={(e) => setImgUrl(e.target.value)}
                        onClick={() => setImgUrl("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="age">Age</Label>
                        <Input
                        type="integer"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        onClick={() => setAge("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="sex">Sex</Label>
                        <Input
                        type="text"
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        onClick={() => setSex("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="breed">Breed</Label>
                        <Input 
                        type="text"
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onClick={() => setBreed("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="temperment">Temperment</Label>
                        <Input
                        type="text"
                        id="temperment"
                        value={temperment}
                        onChange={(e) => setTemperment(e.target.value)}
                        onClick={() => setTemperment("")}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="personality">Personality</Label>
                        <Input
                        type="text"
                        id="personality"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        onClick={() => setPersonality("")}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Adding Dog To Database..." : "Add Dog"}
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

export default NewDog;