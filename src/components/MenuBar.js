import React from 'react';
import './MenuBar.css'
import Logo from '../assets/LogoOpinion.png'
import Facebook from '../assets/icons/facebook.png'
import Twitter from '../assets/icons/twitter.png'
import Magnify from '../assets/icons/magnify.png'
import {Link} from 'react-router-dom'

const MenuBar = (props) => {

    return (
        <div className="menubar">
       <Link to='/'> <div className='logo'><img src={Logo}/></div></Link>
        <ul className='listitems'>
        <li><Link><img src={Facebook}/></Link></li>
        <li><Link><img src={Twitter}/></Link></li>
        <Link className="search" onClick={props.searchvisibility}><li><img src={Magnify}  /><span>ძებნა</span></li></Link>
        <Link className="menu" onClick={props.visibility} ><li>მენიუ</li></Link>
        
        </ul>
           
        </div>
    );
};

export default MenuBar;