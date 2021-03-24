import {listRelated} from '../actions/blog'
const SHOW_CATEGORY='SHOW_CATEGORY'
const initialState = {
  loading: false,
  relatedPosts: [],
  error: ''
}

const categoryReducer = (state={initialState}, action) => {
  
      switch (action.type) {
      /* case 'SHOW_CATEGORY': 
      const post="603228f9d7e88e03325281ed"
      let relatedPosts;
      return{
      
      listRelated(post)
      
      .then (data=>return {{relatedPosts= data}})
      .then ({...state, posts:relatedPosts })
      .catch((err)=> console.log(err))
       
        
      } */
      
      case "FETCH_CATEGORY":
      return {...state, loading:true}
      
      case "FETCH_SUCCESS":
        return {
          loading: false,
          relatedPosts: action.payload,
          error: ''
        }
        case "FETCH_FAILURE":
          return {
            loading: false,
            relatedPosts: [],
            error: action.payload
          }
      
  default:return state
      
    }
  
  }

    
  
  
  export default categoryReducer;
  