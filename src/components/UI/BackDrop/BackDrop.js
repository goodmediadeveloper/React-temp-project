import React from "react";
import classes from './BackDrop.module.sass'

const BackDrop = props => <div className={classes.BackDrop} onClick={props.onClick}/>

export default BackDrop
