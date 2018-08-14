import React from 'react';
import { Button } from 'react-bootstrap';

const button = (props) => {
    return (
        <Button block onClick={() => props.click(props.id)}>
            {props.children}
        </Button>
    );
};

export default button;