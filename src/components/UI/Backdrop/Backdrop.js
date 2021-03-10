import React from 'react';
import classes from './Backdrop.css';

//sluzi nam da izadjemo iz narudzbine
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;