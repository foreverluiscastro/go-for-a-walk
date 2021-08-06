import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles';

function WalkerNavBar({ user, setUser }) {
    const history = useHistory();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                history.push("/");
            }
        });
    }

    return (
        <Wrapper>
            <Logo>
                <Link to="/walker-app">Go For A Walk</Link>
            </Logo>
            <Nav>
            <Button as={Link} to="/walker-app/my-profile">
                    My Profile
                </Button>
                <Button as={Link} to="/walker-app/my-appointments">
                    My Appointments
                </Button>
            <Button variant="outline" onClick={handleLogoutClick}>
                    Logout
                </Button>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Fredoka One";
  font-size: 4rem;
  color: Deeppink;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default WalkerNavBar;