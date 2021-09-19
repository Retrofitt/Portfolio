import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import { useParams } from "react-router";

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
import logo1 from './assests/logo/logo1.png'
import ig from './assests/logo/ig.png'
import linkedin from './assests/logo/linkedin.png'
import twitter from './assests/logo/twitter.png'
import github from './assests/logo/github.png'


function App() {

  const photos = [
    {image:photo1},
    {image:photo2}, 
    {image:photo3}, 
    {image:photo4}, 
    {image:photo5}, 
    {image:photo6}, 
    {image:photo7}, 
    {image:photo8}, 
    {image:photo9}
  ]


  const socials = {
    ig:ig, 
    linkedin:linkedin, 
    twitter:twitter, 
    github:github
  }


  return (<div className="App">

    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/photography'>Photography</Link>
    </nav>
    <Switch>
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
        <Home logo={logo1} socials={socials}/>
      </Route>
    </Switch>

  </div>);
}

export default App;
