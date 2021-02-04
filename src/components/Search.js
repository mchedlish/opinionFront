import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div className='searchpage row' style={{opacity:props.visible? "0.8":'0'}}>
            <div className='col-lg-6 searchInput'>
           <form className='form'>
           <input type='text' value="საძიებო სიტყვა" className='input'>
           
           </input>
           </form>
            <div className="cross" onClick={props.searchvisibility}><a href='/'>X</a></div>
           
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Search;