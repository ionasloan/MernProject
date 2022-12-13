import React from "react";
import Event from "./Event/Event.js";
import useStyles from './styles';

const Events = () =>{
    const classes = useStyles();
    return (
        <>
         <h1 className="">EVENTS</h1>
         <Event />
         <Event />
        </>
    )
}

export default Events;