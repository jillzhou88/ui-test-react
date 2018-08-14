import React from 'react';

import classes from './Card.css';
import Button from '../UI/Button/Button';

const card = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.item.img} className={classes.img} alt={props.item.title}/>
            <div className={classes.middle}>
                <Button click={props.click} id={props.item.id}>{props.button}</Button>
            </div>
        </div>
    );
};

export default card;