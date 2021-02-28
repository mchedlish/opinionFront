import React, {useState, useEffect} from 'react';
import '../components/MainStory.css'
import MenuBar from './MenuBar'
import MenuPage from './MenuPage'
import BottomMenu from './BottomMenu';
import Search from './Search'
import {Link} from 'react-router-dom'
import {listBlogsWithCategoriesAndTags} from '../actions/blog'

const MainStory = () => {

    const [pageVisible, setpageVisible]=useState(false)
    const [searchVisible, setsearchVisible]=useState(false)
    const [allBlogs, setallBlogs]=useState([])
     
   

    useEffect(() => {
        listBlogsWithCategoriesAndTags()
        .then(data=>setallBlogs(prevState=>prevState.concat(data.blogs[data.blogs.length-1].title)))
        .catch((err)=> console.log(err))     
        }, [])

        

        
       


    const switchVisibility = ()=> {
    return (setpageVisible(!pageVisible), setsearchVisible(false))

    }
    const searchVisibility = ()=> {
        return (setsearchVisible(!searchVisible), setpageVisible(false))
    
        }

    return (
        <div className='col-lg-6 mainstory'>
        <Link><p className="mainheadline">{pageVisible? "":allBlogs}</p></Link>
            <MenuBar visibility={switchVisibility} searchvisibility={searchVisibility}/>
            <MenuPage visible={pageVisible}/>
            <BottomMenu color={pageVisible} visible={pageVisible}/>
            <Search visible={searchVisible} searchvisibility={searchVisibility}/>

            
        </div>
    );
};

export default MainStory;