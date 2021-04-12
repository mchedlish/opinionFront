import React, {useState, useEffect} from 'react';
import './Search.css'
import {listSearch} from '../actions/blog'

const Search = (props) => {
    const [values, setValues] = useState({
        search: "საძიებო სიტყვა",
        results: [],
        searched: false,
        message: ''
    });

    const searchSubmit = e=>{
        e.preventDefault();
      
       
        listSearch(values.search).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
     
        });
console.log(values.results)

    }

    const handleChange=e=> {
setValues ({search: e.target.value})
console.log(values.search)
    }
   
    return (
        <div className='searchpage row' style={{opacity:props.visible? "0.8":'0'}}>
            <div className='col-lg-6 searchInput'>
           <form className='form' onSubmit={searchSubmit}>
           <input type='text' value={values.search} className='input' onChange={handleChange}>
           
           </input>
           <button type='submit' className='searchButton'>ძებნა</button>
           </form>
            <div className="cross" onClick={props.searchvisibility}><a href='/'>X</a></div>
           
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Search;