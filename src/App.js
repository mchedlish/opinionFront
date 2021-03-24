import MainStory from "../src/components/MainStory";
import Stories from "../src/components/Stories";
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  
 
return (
   
   <Provider store={store}> 
<div className="App container-fluid">
    
<div className='row'>
      <MainStory/>
      <Stories/>
      </div>
    </div>

    </Provider>
  
    
    
  );


}

export default App;;
