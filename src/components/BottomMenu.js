import React, {useEffect, useState} from 'react';
import './BottomMenu.css'
import './MenuPage.css'
import {Link} from 'react-router-dom'
import {fetchPolitics, fetchEconomics, fetchWorld, fetchTrends, fetchTechnologies} from '../redux/actions'
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
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchPolitics()}><li className={showlistOne}>პოლიტიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchEconomics()}><li className={showlistTwo}>ეკონომიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchWorld()}><li className={showlistThree}>მსოფლიო</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchTechnologies()}><li className={showlistFour}>ტექნოლოგიები</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>props.fetchTrends()} ><li className={showlistFive}>ტრენდები</li></Link>
        </ul>
            </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
      fetchPolitics: () => dispatch(fetchPolitics()),
      fetchEconomics: () => dispatch(fetchEconomics()),
      fetchWorld:() => dispatch(fetchWorld()),
      fetchTechnologies:() => dispatch(fetchTechnologies()),
      fetchTrends:() => dispatch(fetchTrends())
    }
  }
export default connect(null, mapDispatchToProps)(BottomMenu);