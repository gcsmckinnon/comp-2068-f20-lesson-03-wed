import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ActionButton from '../../shared/ActionButton';

const Add = ({ todos, setTodos }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = ({target}) => {
    const {value} = target;

    setInputs({
      item: value
    });
  };

  const handleSubmit = () => {
    if (!inputs.item) return;

    setTodos([
      ...todos,
      {
        item: inputs.item,
        id: (new Date()).getTime()
      }
    ]);
  };

  return (
    <Form>
      {console.log(inputs)}
      <Form.Group>
        <Form.Label>
          Todo Item:
        </Form.Label>

        <Form.Control name="item" onChange={handleChange}/>
      </Form.Group>

      <ActionButton label="Add Item" action={handleSubmit}/>
    </Form>
  )
};

export default Add;