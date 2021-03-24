import { applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import categoryReducer from './categoryReducer'

const store = createStore(
  categoryReducer,
  composeWithDevTools(applyMiddleware(thunk))
  
)

export default store