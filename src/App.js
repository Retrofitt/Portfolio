import React from "react";
import {Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Photography from './components/Photography'
import Projects from './components/Projects'


function App() {
  return (<div className="App">
    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Projects'>Projects</Link>
      <Link to='/Photography'>Photography</Link>
      <Link to='/Contact'>Contact</Link>
    </nav>
    <Switch>
      <Route path='/Contact'>
        <Contact/>
      </Route>
      <Route path='/Photography'>
        <Photography/>
      </Route>
      <Route path='/Projects'>
        <Projects/>
      </Route>
      <Route path='/About'>
        <About/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  </div>);
}

export default App;
