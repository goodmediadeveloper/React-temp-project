import React from "react";
import classes from './Select.module.sass';

const Select = props => {
    const htmlForm = `${props.label}-${Math.random()}`;
    return (
        <div className={classes.Select}>
            <label htmlFor={htmlForm}>{props.label}</label>
            <select
                id={htmlForm}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            key={option.value}
                            value={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
};

export default Select
