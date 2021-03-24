import React, {useEffect} from 'react';
import './BottomMenu.css'
import './MenuPage.css'
import {Link} from 'react-router-dom'
import {fetchPosts} from '../redux/actions'
import { connect } from 'react-redux'
import { findAllInRenderedTree } from 'react-dom/test-utils';



const BottomMenu = (props) => {
   /*  useEffect(() => {
        fetchPosts()
      }, []) */


    const showlistOne = props.visible? "show-one":''
    const showlistTwo = props.visible? "show-two":''
    const showlistThree = props.visible? "show-three":''
    const showlistFour = props.visible? "show-four":''
    const showlistFive = props.visible? "show-five":''

    return (
        <div className='bottommenu'>
        <ul style={{color:props.color? "#1c1c1c":'white'}}>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchPosts()}><li className={showlistOne}>პოლიტიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistTwo}>ეკონომიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistThree}>მსოფლიო</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistFour}>ტექნოლოგიები</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}}><li className={showlistFive}>ტრენდები</li></Link>
        </ul>
            </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
      fetchPosts: () => dispatch(fetchPosts())
    }
  }
export default connect(null, mapDispatchToProps)(BottomMenu);