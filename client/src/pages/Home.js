import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Wrapper>
            <h1>Go For A Walk</h1>
            <p></p>
            
        </Wrapper>
    )
};

const Wrapper = styled.section`
  max-width: 500px;
  font-family: "Permanent Marker";
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  font-size: 30px;
  color: deeppink;
  margin: 40px auto;
  padding: 16px;
  gap: 24px;
  text-align: center;
`;

export default Home;