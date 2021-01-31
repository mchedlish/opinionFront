import MainStory from "../src/components/MainStory";
import Stories from "../src/components/Stories";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  <Switch>
  <Route exact path='/' component={<App/>}/>
  
  </Switch>


  return (
    <BrowserRouter>
    <div className="App container-fluid">
    <div className='row'>
      <MainStory/>
      <Stories/>
      </div>
    </div>
    </BrowserRouter>
  );


}

export default App;
