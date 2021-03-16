import fetch from 'isomorphic-fetch';



export const createBlog = (blog, token) => {
    return fetch(`http://localhost:8000/api/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listBlogsWithCategoriesAndTags = (skip, limit) => {

    const data = {
        limit,
        skip
    };

    return fetch(`http://localhost:8000/api/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleBlog = (slug, props) => {
    
    
    return fetch(`http://localhost:8000/api/blog/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            
            return response.json()
})



.catch(err => console.log(err));
            }

            export const listRelated = (related) => {
                return fetch(`http://localhost:8000/api/blogs/${related}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                  
                    
                })
                    .then(response => {
                        console.log(response)
                        return response.json() 
                    })
                    .catch(err => console.log(err));
            };         