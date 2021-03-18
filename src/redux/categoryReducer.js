const categoryReducer = (state, action) => {
    switch (action.type) {
      case SHOW_CATEGORY: return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      }
  
      default: return state
    }
  }
  
  export default categoryReducer;
  