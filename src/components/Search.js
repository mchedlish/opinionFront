import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div className='searchpage row' style={{opacity:props.visible? "0.8":'0'}}>
            <div className='col-lg-6'></div>
        </div>
    );
};

export default Search;