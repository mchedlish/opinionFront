import React, {useState, useEffect} from 'react';
import '../components/Stories.css'
import Post from './Post'

import {listBlogsWithCategoriesAndTags} from '../actions/blog'

const Stories = (props) => {
const [allBlogs, setallBlogs]=useState(null)


 

useEffect(() => {
    
    listBlogsWithCategoriesAndTags()
    .then(data=>setallBlogs(data.blogs))
    .catch((err)=> console.log(err))
    
    
    
    
}, [])

const posts = ()=>allBlogs.map(post=><Post 
    category={post.categories[0].name}
    title={post.title}
    excerpt={post.excerpt}
    photo={post.slug}
    
    />)  

console.log(allBlogs)



const category = ()=>allBlogs.map(blog=>console.log(blog.categories[0]))





    return (
        <div className='stories row'>
        <div className='col-lg-12'>
        
{allBlogs? posts():null}
       
        </div>
       
            
        </div>
    );
};


export default Stories;