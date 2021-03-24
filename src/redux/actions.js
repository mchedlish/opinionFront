import axios from 'axios'

/* export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(showCategory(category))
    //const post="603228f9d7e88e03325281ed"
      listRelated(category)
      .then(response => {
        // response.data is the users
        const posts = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
 */

/* export const showCategory = (category) => {
    return {
      type: SHOW_CATEGORY,
      payload: category
    }
  } */

  export const fetchPosts = () => {
   
    const post="603228f9d7e88e03325281ed"
    
    return (dispatch) => {
    
      dispatch(fetchCategory())
      axios
        .post(`http://localhost:8000/api/blogs/${post}`)
        .then(response => {
          console.log(response)
          const posts = response.data
          
          dispatch(fetchSuccess(posts))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchFailure(error.message))
        })
    }
  }
  
  export const fetchCategory = () => {
    return {
      type: 'FETCH_CATEGORY'
    }
  }
  
  export const fetchSuccess = posts => {
    return {
      type: 'FETCH_SUCCESS',
      payload:posts
    }
  }
  
  export const fetchFailure = error => {
    return {
      type: 'FETCH_FAILURE',
      payload: error
    }
  }
  
  