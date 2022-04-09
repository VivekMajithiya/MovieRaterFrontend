import React from 'react';
import classes from './actionbutton.module.css'

const ActionButton = (props) =>{

    let buttonText=''
    let defaultClass = [classes.action]
    switch(props.action)
    {
        case 'D':
            buttonText='Delete Movie!!'
            defaultClass.push(classes.red)
            break;
        
        case 'E':
            buttonText='Save Updates'
            defaultClass.push(classes.blue)
            break;
        case 'C':
            buttonText='Add new Movie'
            defaultClass.push(classes.green)
            break;
    }

    return(
        <div className={defaultClass.join(' ')}>{buttonText}</div>
        )
}

export default ActionButton;