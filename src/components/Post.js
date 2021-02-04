import React from 'react';
import './Post.css'
import SomeImage from '../assets/images/mainimage.jpg'
const Post = () => {
    return (
        <div className='post'>
            <img src={SomeImage}></img>
            <p className='category'>sajhdhakssakd</p>
            <p className='headline'>sdjakdjhaskhdjkasjdaskdhakshdkahkaj</p>
            <p className='excerpt' ></p>
        </div>
    );
};

export default Post; 