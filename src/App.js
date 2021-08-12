
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Switch>
       <Route  path='/' component={Home} exact /> 
       <Route  path='/about' component={About} /> 
       <Route  path='/contact' component={Contact} /> 

        </Switch>
         
      </header>
      <div className="footer"></div>
    </div>
  );
}
        
         

export default App;
