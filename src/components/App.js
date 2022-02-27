import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Label from './Label';
import Newsfeed from './Newsfeed';
import SearchBar from './SearchBar';

const App = () => {
    
    let labelData = localStorage.getItem("value");
    if(!labelData || labelData.length < 1){
        
    let oData = [
        {
            name: 'general',
            url: "general"
        }
    ]
        localStorage.setItem("value",JSON.stringify(oData));
    }   
    labelData = JSON.parse(labelData);
    const [label, setLabel] = useState(labelData);
    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    const [activeTab, setActiveTab] = useState('general');

    const handleLabelClick = (e) => {
        let value = e.target.getAttribute("value");
        getData(value);
        setLabel(value);
        setActiveTab(value);
    }

    useEffect(() => {
        let generalData = 'general'
        getData(generalData)
    }, []);

    let getData = async (cat) => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d`, {

        });
        setApiData(response.data.articles);
        setFilterData(response.data.articles)
    }

    const onSearchSubmit = (e) => {
        let searchValue = e.target.value;
        if(searchValue.length > 0) {
            let filterValue = apiData.filter(item =>  { return item.title.includes(searchValue)})
            setApiData(filterValue);
        }else {
            setApiData(filterData)
        }  
    }

    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
           
            <h1>News Today</h1>
            <Label
                className = {activeTab}
                labelData = {labelData}
                value = {label}
                onClick = {handleLabelClick}
            />
            
            <SearchBar value = {searchInput} onChange = {setSearchInput} onKeyUp = {onSearchSubmit} />
            <Newsfeed data = {apiData} />    
        </div>
    );
}

export default App;