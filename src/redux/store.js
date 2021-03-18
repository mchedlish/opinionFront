import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


import categoryReducer from './categoryReducer'

const store = createStore(
  categoryReducer,
  composeWithDevTools()
  
)

export default store