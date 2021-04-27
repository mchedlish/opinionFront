import React, {useEffect, useState} from 'react';
import './BottomMenu.css'
import './MenuPage.css'
import {Link, withRouter} from 'react-router-dom'
import {fetchPolitics, fetchEconomics, fetchWorld, fetchTrends, fetchTechnologies} from '../redux/actions'
import { connect } from 'react-redux'




const BottomMenu = (props) => {
  
 
    const showlistOne = props.visible? "show-one":''
    const showlistTwo = props.visible? "show-two":''
    const showlistThree = props.visible? "show-three":''
    const showlistFour = props.visible? "show-four":''
    const showlistFive = props.visible? "show-five":''
    const pushing = ()=>{props.history.push('related')}
    let pagePath = props.history.location.pathname;
   
    return (
        <div className='bottommenu' style={(pagePath.includes('searched-post')||pagePath!='/')?{display:'none'}:null}>
        <ul style={{color:props.color? "#1c1c1c":'white'}}>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>{props.fetchPolitics(); pushing()}}><li className={showlistOne}>პოლიტიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>{props.fetchEconomics(); pushing()}}><li className={showlistTwo}>ეკონომიკა</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>{props.fetchWorld(); pushing()}}><li className={showlistThree}>მსოფლიო</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>{props.fetchTechnologies(); pushing()}}><li className={showlistFour}>ტექნოლოგიები</li></Link>
        <Link style={{color:props.color? "#1c1c1c":'white'}} onClick={()=>{props.fetchTrends(); pushing()}} ><li className={showlistFive}>ტრენდები</li></Link>
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
export default connect(null, mapDispatchToProps)(withRouter(BottomMenu));