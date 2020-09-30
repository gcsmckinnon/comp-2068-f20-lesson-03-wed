import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ActionButton from '../shared/ActionButton';

const Instructions = () => {
  return (
    <Jumbotron>
      <header>
        <h1>Our Todo Application</h1>
      </header>

      <hr/>

      <p>
        Create a todo. Complete the todo. Remove the todo.
      </p>

      <ActionButton label="Call Now" action={() => console.log('Ya clicked it')}/>
    </Jumbotron>
  );
};

export default Instructions;