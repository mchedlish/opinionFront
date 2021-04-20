import React from 'react';
import './Post.css'
import Book from '../assets/icons/open-book.png'
import {Link} from "react-router-dom";

const Post = ({
    category, 
    title, 
    excerpt, 
    photo, 
    singleBlog, 
    scroll, 
    direct, 
    excerptStyle,
    photoStyle,
    readStyle,
    fontColors

}) => {
    
const styles = {
    backgroundColor:"black",
    objectFit:'cover',
    backgroundRepeat:"no-repeat",
    width: '100%',
    height:'240px',
    display:photoStyle
    
}
const excStyle = {
    display:excerptStyle
}

const rdStyle = {
display:readStyle

}
const colors = {
    color:fontColors
}


 return (
        <div className='post col-md-12' >
        <div onClick={direct}>
        <Link
        style={{textDecoration:'none'}} onClick={scroll}>
        <div className='image'onClick={e=>singleBlog(photo)} >
        <img src={"http://localhost:8000/api/blog/photo/"+`${photo}`} style={styles}/>
        
        <p className='category' style={colors} >{category}</p>
        <p className='headline' style={colors}>{title}</p>
        <p className='excerpt' dangerouslySetInnerHTML={{__html:excerpt}} style={excStyle}></p>
        <div className='reading' style={rdStyle}><span><img className='clock' src={Book}/><span className='minutes'></span></span> წაიკითხეთ მეტი...</div>
        </div>
        </Link>
        </div>
        </div>
    );
};

export default Post; 