import React from 'react';
import '../components/Stories.css'
import Post from './Post'

const Stories = (props) => {
    return (
        <div className='stories row'>
        <div className='col-lg-12'>
        <Post/>
        <Post/>
        </div>
        
            
        </div>
    );
};

export default Stories;