import React from 'react';
import styled from 'styled-components';

import { TextInput, Button } from 'react-materialize';
import { useAuthContext } from '../context/useAuthContext';

const StyledContainer = styled.div`
  margin: 10rem;
`;

function Login() {
  const { state } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <p>Hola {state.name}</p>
        <TextInput id="username" name="username" label="Username" />
        <TextInput
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </StyledContainer>
  );
}

export { Login };
