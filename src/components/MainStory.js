import React, {useState} from 'react';
import '../components/MainStory.css'
import MenuBar from './MenuBar'
import MenuPage from './MenuPage'
import BottomMenu from './BottomMenu';
import Search from './Search'

const MainStory = () => {

    const [pageVisible, setpageVisible]=useState(false)
    const [searchVisible, setsearchVisible]=useState(false)
    const switchVisibility = ()=> {
    return (setpageVisible(!pageVisible))

    }
    const searchVisibility = ()=> {
        return (setsearchVisible(!searchVisible))
    
        }

    return (
        <div className='col-lg-6 mainstory'>
       
            <MenuBar visibility={switchVisibility} searchvisibility={searchVisibility}/>
            <MenuPage visible={pageVisible}/>
            <BottomMenu color={pageVisible} visible={pageVisible}/>
            <Search visible={searchVisible}/>

            
        </div>
    );
};

export default MainStory;