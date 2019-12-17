import React from 'react';
import '../App.css';
import GigService from '../services/gigs';


const Gig = ({gigs}) => {
    return (
        <div>
            <p>Artisti: {gigs.artisti}</p>
            <p>Tapahtumannimi: {gigs.tapahtumanimi}</p>
            <img src= {gigs.keikkamainoskuva}></img>
            <p>pvm: {gigs.pvm}</p>
            
            
        </div>
    )
}
 
const Gigs = ({gigs, setGigs}) => {

 return (
    <div className="part" >
        <ul className="Gigs">
        
        {gigs.map(gig => <Gig  gigs={gig} key={gig.id} />)}
        </ul>
    </div>
 )
}
export default Gigs;