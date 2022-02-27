import React, { useState } from "react";
import './Popup.css';
 
const Popup = props => {

const [showPopup, setShowpopup] = useState(props.labelData);
const [values, setValues] = useState({
    name: "",
    url: ""
})

const togglePopup = (event) => {
    event.preventDefault();
    props.labelData.push(values);
    setShowpopup(props.labelData);
    localStorage.setItem("value",JSON.stringify(props.labelData));
    console.log(props.labelData);
}
const handleCategoryChange = (e) => {
    setValues({...values, name: e.target.value})  
}

const handleCatURLChange = (e) => {
    setValues({...values, url: e.target.value})  
}
    return (
      <form className='ui form' onSubmit = {togglePopup}>
        <div className='popup'>
            <div className='popup_inner'>
                <button onClick={props.handleClose} 
                        className="right floated ui segment">X</button>
                <h1 className='popup_head'>{props.content}</h1>
                <div className="field">
                    <input type="text" 
                            name = "category" 
                            onChange={handleCategoryChange} 
                            value = {values.name}
                            className='popup-input' 
                            placeholder="Category Name" 
                    />
                </div>
                <div className="field">
                    <input type="text" 
                            name="api_url" 
                            onChange={handleCatURLChange}
                            value = {values.url}
                            className='popup-input' 
                            placeholder="API url" 
                    />
                </div>
                {props.labelData.length < 5 ? 
                    <button type="submit" className='ui button add-button' onClick={props.handleClose}>+ Add</button>
                    : <button type="submit" className='ui button add-button' disabled>+ Add</button>}
            </div>
        </div>
    </form>
  );
};
 
export default Popup;