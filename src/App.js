import React from "react";
import {Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Photography from './components/Photography'
import Projects from './components/Projects'
import Photo from "./components/Photo";

import './styles/styles.css'

// import photo1 from './assests/photos/photo1.jpg'
// import photo2 from './assests/photos/photo2.jpg'
// import photo3 from './assests/photos/photo3.jpg'
// import photo4 from './assests/photos/photo4.jpg'
// import photo5 from './assests/photos/photo5.jpg'
// import photo6 from './assests/photos/photo6.jpg'
// import photo7 from './assests/photos/photo7.jpg'
// import photo8 from './assests/photos/photo8.jpg'
// import photo9 from './assests/photos/photo9.jpg'
import logo1 from './assests/logo/logo1.png'
// import ig from './assests/logo/ig.png'
// import linkedin from './assests/logo/linkedin.png'
// import twitter from './assests/logo/twitter.png'
// import github from './assests/logo/github.png'


function App() {

  const photos = [
    {image:'https://drive.google.com/thumbnail?id=1rfSRmDB7MqdhqPnqDe7gMa15RrNFKyO6'},
    {image:'https://drive.google.com/thumbnail?id=1ujpJx6NPW5Ki_etunr1YCVMhht6CHImu'}, 
    {image:'https://drive.google.com/thumbnail?id=1hQsLAV5U44N7qmpkfNXoI8fJ-OZsKyap'}, 
    {image:'https://drive.google.com/thumbnail?id=1KLj34EasGdDThg889WwN3hK3OKlmlewJ'}, 
    {image:'https://drive.google.com/thumbnail?id=1XN9kP0uU4wqIJ1ESi98WOk7ZONmBU-BN'}, 
    {image:'https://drive.google.com/thumbnail?id=1nu3fvR6G30zAu1J690yf4y0Prdb8SY5P'}, 
    {image:'https://drive.google.com/thumbnail?id=181N36SA1HoFU8JLRQUw4MCe1KCJvE0qW'}, 
    {image:'https://drive.google.com/thumbnail?id=1tpzoHsJyAFzMxe2ob1UMCk1yxAKfjuOz'}, 
    {image:'https://drive.google.com/thumbnail?id=1Bf8pP0G7P2SdBWE7uB3M00kxq5uwD0_W'}
  ]


  const socials = {
    ig:'https://drive.google.com/thumbnail?id=1jxtAR-KhKBEL2xgN7IMiFjwObcVw7Cvm', 
    linkedin:'https://drive.google.com/thumbnail?id=1dqQW75Lx5Zmlbp5TaaOYbE9wy8BITFNN', 
    twitter:'https://drive.google.com/thumbnail?id=1DiCf56nqOSf8h_36DprDL1WW69oaX_I5', 
    github:'https://drive.google.com/thumbnail?id=1jeg6aoYx8dy8fTojgGcT2Xn0RiKYklrl'
  }


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
        <Contact socials={socials}/>
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
        <Home logo={logo1}/>
      </Route>
    </Switch>

  </div>);
}

export default App;
