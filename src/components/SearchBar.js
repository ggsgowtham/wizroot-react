import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div>
            <form className="ui form searchBar">
                <div className="ui category search">
                    <div className="ui icon input search-icon">
                        <i className="search icon"></i>
                        <input 
                            type="text" 
                            value={props.value}
                            className="searchBar-input"
                            onChange={e => props.onChange(e.target.value)}
                            onKeyUp = {props.onKeyUp}
                        />
                    </div>
                </div>    
            </form>
        </div>
    );
}

export default SearchBar;