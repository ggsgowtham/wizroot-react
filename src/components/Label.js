import React, { useState } from 'react';
import './Label.css';
import Popup from './Popup';

const Label = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {props.labelData.map(data => {
                return (
                    <div className={`ui label label_shape ${props.className === data.name ? 'active' : 'unactive'}`}
                        value = {data.name}
                        key = {data.name}
                        onClick = {props.onClick} 
                    >
                         {data.name}
                    </div>
                )
            })}
             
           <button className='ui label label_shape' onClick = {togglePopup}>+</button>
           {isOpen && <Popup
                labelData = {props.labelData}
                content='Add Category'
                handleClose={togglePopup}
            />}
        </div>
    );
};


export default Label;