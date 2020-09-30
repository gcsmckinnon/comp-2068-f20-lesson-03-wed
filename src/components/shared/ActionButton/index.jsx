import React from 'react';
import { Button } from 'react-bootstrap';

const ActionButton = ({ label, action }) => {
  try {
    // Add component logic here
    if (!label || !action) {
      throw new Error(`You are missing a required attribute (label or action)`);
    }

    // Return your JSX element
    return (
      <Button onClick={action}>{label}</Button>
    );
  } catch (error) {
    console.error(error.message);
    console.error(error.stack);
    
    return null;
  }
};

export default ActionButton;