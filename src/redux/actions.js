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
 const politics="603228f9d7e88e03325281ed"
 const economics='60322902d7e88e03325281ee'
 const world='60322918d7e88e03325281f0'
 const technologies = '6032290ed7e88e03325281ef'
 const trends= '6032291fd7e88e03325281f1'
  
  export const fetchPolitics = () => {
   return (dispatch) => {
    
      dispatch(fetchCategory())
      axios
        .post(`http://localhost:8000/api/blogs/${politics}`)
        .then(response => {
          console.log(response.data)
          const posts = response.data
          
          dispatch(fetchSuccess(posts))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchFailure(error.message))
        })
    }
  }
  
  export const fetchEconomics = () => {
    return (dispatch) => {
     
       dispatch(fetchCategory())
       axios
         .post(`http://localhost:8000/api/blogs/${economics}`)
         .then(response => {
           console.log(response.data)
           const posts = response.data
           
           dispatch(fetchSuccess(posts))
         })
         .catch(error => {
           // error.message is the error message
           dispatch(fetchFailure(error.message))
         })
     }
   }

   export const fetchWorld = () => {
    return (dispatch) => {
     
       dispatch(fetchCategory())
       axios
         .post(`http://localhost:8000/api/blogs/${world}`)
         .then(response => {
           console.log(response.data)
           const posts = response.data
           
           dispatch(fetchSuccess(posts))
         })
         .catch(error => {
           // error.message is the error message
           dispatch(fetchFailure(error.message))
         })
     }
   }
  
   export const fetchTechnologies = () => {
    return (dispatch) => {
     
       dispatch(fetchCategory())
       axios
         .post(`http://localhost:8000/api/blogs/${technologies}`)
         .then(response => {
           console.log(response.data)
           const posts = response.data
           
           dispatch(fetchSuccess(posts))
         })
         .catch(error => {
           // error.message is the error message
           dispatch(fetchFailure(error.message))
         })
     }
   }
   export const fetchTrends = () => {
    return (dispatch) => {
     
       dispatch(fetchCategory())
       axios
         .post(`http://localhost:8000/api/blogs/${trends}`)
         .then(response => {
           console.log(response.data)
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
      type: 'FETCH_POLITICS',
      payload:posts
    }
  }
  
  export const fetchFailure = error => {
    return {
      type: 'FETCH_FAILURE',
      payload: error
    }
  }
  
  