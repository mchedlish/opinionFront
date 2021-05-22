import React, {useState, useEffect} from 'react';
import './Search.css'
import {listSearch} from '../actions/blog'
import {Link, withRouter} from 'react-router-dom'
import Post from './Post'
import {singleBlog} from '../actions/blog'
import { set } from 'js-cookie';

const Search = (props) => {
    const [values, setValues] = useState({
        search: "საძიებო სიტყვა",
        results: [],
        searched: false,
        message: ''
    });
    const [searchblog, setSearchblog]=useState(null)
    const single =(photo)=>singleBlog(photo)
    .then(data=>setSearchblog(prevState=>data))
    .then(data=>console.log(data))
    .catch((err)=> console.log(err))

    const searchedPosts = ()=>values.results.map(post=><Post 
        category={post.categories[0].name}
        title={post.title}
        excerpt={post.excerpt}
        photo={post.slug}
        singleBlog={single}
        //scroll={executeScroll}
        direct={()=>props.history.push(post.slug+'-search')}
        excerptStyle={'none'}
        photoStyle={'none'}
        readStyle={'none'}
        fontColors={'black'}
       />)  

    const searchSubmit = e=>{
        e.preventDefault();
           listSearch(values.search).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
     
        });


    }

    const handleChange=e=> {
setValues ({search: e.target.value})

    }
const emptyValues = ()=>{
    setValues({search:''})
}
    let pagePath=props.history.location.pathname
    const pushing = ()=>props.history.push('searched-posts')
   
    return (
        <div className='searchpage row' style={{opacity:props.visible? "0.7":'0'}}>
            <div className='col-lg-6 searchInput'>
           <form className='form' onSubmit={searchSubmit}>
           <input type='text' value={values.search} className='input' onChange={handleChange} onFocus={emptyValues}>
           
           </input>
           <button type='submit' className='searchButton' onClick={pushing}>ძებნა</button>
           </form>
            <div className="cross" onClick={props.searchvisibility}><a href='/'>X</a></div>
            </div>
            <div className='line'></div>
            <p className='singleheadline' style={(pagePath==='/')? {display:'none'}:{display:'block'}}>{searchblog?searchblog.title:null}</p>
            <p className='singlebody'  style={(pagePath==='/')? {display:'none'}:{display:'block'}} dangerouslySetInnerHTML={{ __html: searchblog?searchblog.body:null }} ></p>
            {values.results?searchedPosts():null}
        </div>
    );
};

export default withRouter(Search);