import React from 'react';
import { Container } from 'react-bootstrap';
import Instructions from './components/Instructions';
import Todo from './components/Todo';

const App = () => {
  return (
    <Container>
      <Instructions/>
      <Todo/>
    </Container>
  );
};

export default App;