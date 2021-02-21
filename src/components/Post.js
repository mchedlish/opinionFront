import React from 'react';
import './Post.css'
import SomeImage from '../assets/images/mainimage.jpg'
import Book from '../assets/icons/open-book.png'
import {Link} from 'react-router-dom'

const Post = ({category, title, excerpt, photo}) => {
const styles = {
    backgroundImage: "url("+SomeImage+")",
    objectFit:'cover',
    backgroundRepeat:"no-repeat",
    width: '100%',
    height:'240px'
    }

    return (
        <div className='post col-md-12'>
        <Link style={{textDecoration:'none'}}>
            <div className='image'>
            <img src={"http://localhost:8000/api/blog/photo/"+`${photo}`} style={styles}/>
            </div>
            <p className='category'>{category}</p>
            <p className='headline'>{title}</p>
            <p className='excerpt' >{excerpt}</p>
            <div className='reading'><span><img className='clock' src={Book}/><span className='minutes'></span></span> წაიკითხეთ მეტი...</div>
        </Link>
            </div>
    );
};

export default Post; 