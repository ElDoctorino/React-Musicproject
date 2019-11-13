import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import images from './components/ImageData';
const navlinks = ["Tampere", "Turku", "Jyväskylä"];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1> REACT-Bootstrap Demo</h1>
      <br></br>
      <h1>Music thing - Scamify</h1>
      </header>

      <nav>
        <MyNavbar links={navlinks}/>
      </nav>
      
      <section className ="carousel">
        <MyCarousel images={images}/>
      </section>
    </div>
  );
}

export default App;