import React from 'react-router-dom'
//import Admin from '../../components/auth/Admin';
import BlogCreate from '../../components/crud/BlogCreate';
import {Link} from 'react-router-dom' 

const Blog = () => {
    return (
        
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            
    
    );
};

export default Blog;