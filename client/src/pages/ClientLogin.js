import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styles';
import LoginForm from '../components/LoginForm';
import ClientSignUpForm from '../components/ClientSignUpForm';
import { Link } from 'react-router-dom';

function ClientLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Wrapper>
            <Logo>
                <Link to="/">Go For A Walk</Link>
            </Logo>
            {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <Divider />
                <p>
                    Don't have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Button>
                </p>
                </>
            ) : (
                <>
                <ClientSignUpForm onLogin={onLogin} />
                <Divider />
                <p>
                    Already have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                </p>
                </>
            )}
        </Wrapper>
    )
}

const Logo = styled.h1`
  font-family: "Fredoka One";
  font-size: 3rem;
  color: #00e0d7;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default ClientLogin;