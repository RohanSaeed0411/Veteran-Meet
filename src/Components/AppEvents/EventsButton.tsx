import React from 'react';
import "./AppEvents.css";
import {AiFillStar} from 'react-icons/ai'


import defaultStyles from '../../Config/styles'
import { IconType } from 'react-icons';
import { Console } from 'console';



function EventsButton(props: any) {
    return (
        
        <div style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: defaultStyles.colors.grey500,
            padding: 6,
            borderRadius: 5,
            borderColor: props.color,
           borderStyle: 'solid',
            borderWidth: 2,
            marginRight: 8,
        }} onClick={props.onPress} >
            {props.icon}
            <small style={{marginLeft: 6, color: props.color}}>{props.text}</small>
        </div>
       
    );
}

export default EventsButton;