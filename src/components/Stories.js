import React from 'react';
import '../components/Stories.css'
import Post from './Post'

const Stories = (props) => {
    return (
        <div className='col-lg-6 stories' >
            <Post/>
            <Post/>
        </div>
    );
};

export default Stories;