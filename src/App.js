import './index.css';
import {Routes, Route} from 'react-router-dom';

import Nav from "./components/Nav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route> //Causes page to display blank
      </Routes>
    </div>
  );
}

export default App;
