import React from 'react';
import './Post.css'
import SomeImage from '../assets/images/mainimage.jpg'
const Post = () => {
const styles = {
    backgroundImage: "url("+SomeImage+")",
    objectFit:'cover',
    backgroundRepeat:"no-repeat",
    width: '300px',
    height:'200px',
    

}

    return (
        <div className='post'>
            <div className='image'>
            <img src={SomeImage} style={styles}/>
            </div>
            <p className='category'>sajhdhakssakd</p>
            <p className='headline'>sdjakdjhaskhdjkasjdaskdhakshdkahkaj</p>
            <p className='excerpt' ></p>
        </div>
    );
};

export default Post; 