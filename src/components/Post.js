import React from 'react';
import './Post.css'
import Book from '../assets/icons/open-book.png'
import {Link} from "react-router-dom";

const Post = ({category, title, excerpt, photo, singleBlog, scroll, direct}) => {
    
const styles = {
    backgroundColor:"black",
    objectFit:'cover',
    backgroundRepeat:"no-repeat",
    width: '100%',
    height:'240px'
}




 return (
        <div className='post col-md-12' >
        <div onClick={direct}>
        <Link
        style={{textDecoration:'none'}} onClick={scroll}>
        <div className='image'onClick={e=>singleBlog(photo)} >
        <img src={"http://localhost:8000/api/blog/photo/"+`${photo}`} style={styles}/>
        
        <p className='category'>{category}</p>
        <p className='headline'>{title}</p>
        <p className='excerpt' dangerouslySetInnerHTML={{__html:excerpt}}></p>
        <div className='reading'><span><img className='clock' src={Book}/><span className='minutes'></span></span> წაიკითხეთ მეტი...</div>
        </div>
        </Link>
        </div>
        </div>
    );
};

export default Post; 