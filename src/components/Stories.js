import React, {useState, useEffect, useRef} from 'react';
import '../components/Stories.css'
import Post from './Post'
import {listBlogsWithCategoriesAndTags, singleBlog} from '../actions/blog'
import RingLoader from "react-spinners/RingLoader";
import {Link, withRouter} from 'react-router-dom'
import BackArrow from '../assets/icons/back-arrow.png'

const Stories = (props) => {
const [allBlogs, setallBlogs]=useState([])
const [blog, setBlog]=useState(null)
const [limit, setLimit]=useState(2)
const [skip, setSkip]=useState(0)
const [loadedBlogs, setLoadedBlogs]=useState([])
let [color, setColor] = useState("#ffffff");


useEffect(() => {
    listBlogsWithCategoriesAndTags(0,2)
    .then(data=>setallBlogs(data.blogs))
    .catch((err)=> console.log(err))
    }, [])
   
    const loadMore = () => {
        let toSkip=skip+limit
        console.log(toSkip)
        
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
          if (data.error) {
              
          } else {
            
             setallBlogs([...allBlogs, ...data.blogs]);
             setSkip(toSkip)
              console.log(allBlogs)
             }
      });
  };  

    const single =(photo)=>singleBlog(photo)
    .then(data=>setBlog(prevState=>data))
    .catch((err)=> console.log(err))

const posts = ()=>allBlogs.map(post=><Post 
    category={post.categories[0].name}
    title={post.title}
    excerpt={post.excerpt}
    photo={post.slug}
    singleBlog={single}
    scroll={executeScroll}
    direct={()=>props.history.push(post.slug)}
   />)  

   

   const myRef = useRef(null)
   const executeScroll = () => myRef.current.scrollIntoView({behavior:'smooth', block:'end'})       
    
  let pagePath=props.history.location.pathname
    

return (
        <div className='stories row'>
        <div className='col-lg-12'>
        <div className='singlestory'>
        <Link to='/' style={{color:'white', textDecoration:"none"}} >
        <h6 ref={myRef} style={pagePath==='/'? {display:'none'}:{display:'block'}} ><img className='backarrow' src={BackArrow}/>უკან დაბრუნება</h6>
        </Link>
        <h6 className='author'><span>ავტორი: </span>ნიკოლოზ მჭედლიშვილი</h6>
        <p className='singleheadline' style={pagePath==='/'? {display:'none'}:{display:'block'}}>{blog?blog.title:null}</p>
        <p className='singlebody'  style={pagePath==='/'? {display:'none'}:{display:'block'}} >{blog? blog.body:null} </p>
        </div>     
      
      
      {allBlogs?posts():null}
      
       </div>

       <div className='butn col-lg-12'><button onClick={loadMore}>{allBlogs?'მეტი ბლოგი...':null}</button></div>
       <div className="sweet-loading">
        <RingLoader color={color} loading={allBlogs.length===0}  size={150} />
      </div>
       </div>
    );
};


export default withRouter(Stories);