import React from 'react';
import './Post.css'
import SomeImage from '../assets/images/mainimage.jpg'
import Clock from '../assets/icons/clock.png'
import {Link} from 'react-router-dom'

const Post = () => {
const styles = {
    backgroundImage: "url("+SomeImage+")",
    objectFit:'cover',
    backgroundRepeat:"no-repeat",
    width: '100%',
    height:'240px'
    }

    return (
        <div className='post'>
        <Link style={{textDecoration:'none'}}>
            <div className='image'>
            <img src={SomeImage} style={styles}/>
            </div>
            <p className='category'>პოლიტიკა</p>
            <p className='headline'>ოპოზიცია თუ არ შევიდა პარლამენტში, ჩამოერთმევათ მანდატები</p>
            <p className='excerpt' >ასდჯალსჯჯალსდჯლასჯლასჯადჯალსკჯდალსჯდალდჯლაჯლჯლკლადლჯ</p>
            <div className='reading'><span><img className='clock' src={Clock}/><span className='minutes'>2</span></span> წუთის საკითხავი</div>
        </Link>
            </div>
    );
};

export default Post; 