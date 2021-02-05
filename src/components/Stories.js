import React from 'react';
import '../components/Stories.css'
import Post from './Post'

const Stories = (props) => {
    return (
        <div className='col-lg-6 stories row'>
        <div className='col-lg-6'>
        <Post/>
        <Post/>
        </div>
        <div className='col-lg-6'>
        <Post/>
        <Post/>
            </div>
            
        </div>
    );
};

export default Stories;