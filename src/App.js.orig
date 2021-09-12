import React from "react";
import {Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Photography from './components/Photography'
import Projects from './components/Projects'
import Photo from "./components/Photo";

import './styles/styles.css'

import photo1 from './assests/photos/photo1.jpg'
import photo2 from './assests/photos/photo2.jpg'
import photo3 from './assests/photos/photo3.jpg'
import photo4 from './assests/photos/photo4.jpg'
import photo5 from './assests/photos/photo5.jpg'
import photo6 from './assests/photos/photo6.jpg'
import photo7 from './assests/photos/photo7.jpg'
import photo8 from './assests/photos/photo8.jpg'
import photo9 from './assests/photos/photo9.jpg'


function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <h2>Yooooo</h2>
      </header>
    </div>
  );
=======

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,]

  return (<div className="App">

    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/photography'>Photography</Link>
      <Link to='/contact'>Contact</Link>
    </nav>

    <Switch>
      <Route path='/contact'>
        <Contact/>
      </Route>
      <Route path={'/photography/:id'}>
        <Photo photos={photos}/>
      </Route>
      <Route path='/photography'>
        <Photography photos={photos}/>
      </Route>
      <Route path='/projects'>
        <Projects/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>

  </div>);
>>>>>>> experimental
}

export default App;
