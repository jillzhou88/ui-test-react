import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const list = (props) => {
    let items = Object.entries(props.list).map(([key, item]) => {
        return (
            <ListGroupItem key={key}>{item.title}</ListGroupItem>
        );
    });
    return (
        <ListGroup>
            {items}
        </ListGroup>
    );
};

export default list;