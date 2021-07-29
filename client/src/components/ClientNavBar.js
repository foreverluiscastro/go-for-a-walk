import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles'

function ClientNavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <Wrapper>
            <Logo>
                <Link to="/">Go For A Walk</Link>
            </Logo>
            <Nav>
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
  font-family: "Permanent Marker", cursive;
  font-size: 4rem;
  color: #00e0d7;
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;
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

export default ClientNavBar;
