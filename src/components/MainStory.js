import React, {useState, useEffect} from 'react';
import '../components/MainStory.css'
import MenuBar from './MenuBar'
import MenuPage from './MenuPage'
import BottomMenu from './BottomMenu';
import Search from './Search'
import {withRouter} from 'react-router-dom'
import {listBlogsWithCategoriesAndTags} from '../actions/blog'

const MainStory = (props) => {

    const [pageVisible, setpageVisible]=useState(false)
    const [searchVisible, setsearchVisible]=useState(false)
    const [allBlogs, setallBlogs]=useState([])
     
   

    useEffect(() => {
        listBlogsWithCategoriesAndTags()
        .then(data=>setallBlogs(prevState=>prevState.concat(data.blogs[0].title)))
        .catch((err)=> console.log(err))     
        }, [])

        

        
       


    const switchVisibility = ()=> {
    return (setpageVisible(!pageVisible), setsearchVisible(false))

    }
    const searchVisibility = ()=> {
        return (setsearchVisible(!searchVisible), setpageVisible(false))
    
        }
let pagePath = props.history.location.pathname;
    return (
        <div className='col-lg-6 mainstory'>
        <p className="mainheadline" style={(pagePath.includes('searched-post')||pagePath!='/')?{display:'none'}:null}>{pageVisible? "":allBlogs}</p>
            <MenuBar visibility={switchVisibility} searchvisibility={searchVisibility}/>
            <MenuPage visible={pageVisible}/>
            <BottomMenu color={pageVisible} visible={pageVisible}  />
            <Search visible={searchVisible} searchvisibility={searchVisibility}/>

            
        </div>
    );
};

export default withRouter(MainStory);