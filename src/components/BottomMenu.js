import React from 'react';
import './BottomMenu.css'
import './MenuPage.css'
import {Link} from 'react-router-dom'

const BottomMenu = (props) => {

    const showlistOne = props.visible? "show-one":''
    const showlistTwo = props.visible? "show-two":''
    const showlistThree = props.visible? "show-three":''
    const showlistFour = props.visible? "show-four":''
    const showlistFive = props.visible? "show-five":''

    return (
        <div className='bottommenu'>
        <ul style={{color:props.color? "#1c1c1c":'white'}}>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistOne}>პოლიტიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistTwo}>ეკონომიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistThree}>მსოფლიო</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistFour}>ტექნოლოგიები</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistFive}>ტრენდები</li></Link>
        </ul>
            </div>
    );
};

export default BottomMenu;