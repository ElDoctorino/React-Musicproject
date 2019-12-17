import React, {useState, useEffect} from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import images from './components/ImageData';
import MusicInfo from './components/MusicInfo.js';
import NewGig from './components/NewGig';
import Gigs from './components/Gigs';
import GigService from './services/gigs';
const navlinks = ["Tampere", "Turku", "Jyväskylä"];

const  App = () => {
  const [gigs, setGigs] = useState([]);
  const amounts = images.map(myImages => myImages.amount * myImages.price);
  const [newGig, setNewGig] = useState("");
  const [myImages,setMyImages] = useState(images);
  const [newImportance, setNewImportance] = useState(false);
  

 
  const getGigs =  () => {
  GigService
    .getAll()
    .then(allGigs => {
    setGigs(allGigs);
    })
};
//muistiinpanot alussa haetaan
useEffect(getGigs,[]);

const addGig = event => {
  const now = new Date();
  event.preventDefault();
  const testGig = {
    content: newGig,
    date: now.toISOString(),
    important: newImportance
  };
GigService.add(testGig)
  .then(Gig => {
    let tempGigs = gigs.concat(Gig);
    setGigs(tempGigs);
    setNewGig("");
    setNewImportance(false);
})
}
const newMusic = music.filter(k => {const musicDate = new Date(k.pvm); 
  return new Date(k.pvm) >= new Date()});
  
  const oldMusic = music.filter(k => {const musicDate = new Date(k.pvm); 
  return new Date(k.pvm) < new Date()});
 
 
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
      
      { <section className ="carousel">
        <MyCarousel images={images}/>
      </section> }
      {/* { <section className ="AllGigs">
      <NewGig newGig ={newGig} setNewGig={setNewGig} newImportance={newImportance} setNewImportance={setNewImportance} submitHandler={addGig} />
      <button onClick={e => addGig(e)}>Lisää muistiinpano! </button>
      <Gigs myGigs={gigs}  setGigs={setGigs}></Gigs>
      </section>} */}
     
      <div className="container">
		    <MusicInfo images={myImages} updateImages={setMyImages} />
      </div>

 {<div><h1>Tulevat keikat</h1><Music myMusic={newMusic} setMusic={setMusic}/></div>}
 {<div><h1>Menneet keikat</h1><Music myMusic={oldMusic} setMusic={setMusic}/></div>}


    </div>
  );
}

export default App;