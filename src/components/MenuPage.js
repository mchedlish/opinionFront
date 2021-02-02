import React, {useState} from 'react';
import './MenuPage.css'
import {Link} from 'react-router-dom'


const MenuPage = (props) => {
   

const showlistOne = props.visible? "show-one":''
const showlistTwo = props.visible? "show-two":''
const showlistThree = props.visible? "show-three":''
const showlistFour = props.visible? "show-four":''
const showlistFive = props.visible? "show-five":''
const showlistSix = props.visible? "show-six":''

return (
        <div className="menupage" style={{opacity:props.visible ? "0.7": "0"}}>
            <ul className="menupagelist">
            <Link className='menulink'><li className={showlistOne}>გამოწერეთ სიახლეები</li></Link>
            <li className={showlistTwo}>დაგვიკაშვირდით:</li>
            <li className={showlistThree}>contact@opinion.ge</li>
             <br/>
            <li className={showlistFour}>საიტი შექმნილია:</li>
            <li className={showlistFive}>www.niko.ge</li>
            <li className={showlistSix}>niko@niko.ge</li>
            </ul>
           
        </div>
    );
};

export default MenuPage;