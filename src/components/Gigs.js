import React from 'react';
import '../App.css';
import GigService from '../services/gigs';


const Gig = ({myGig, handleDelete, handleChange}) => {
    let textColor = "notimportant";
    // if(myGig.important) {
    // textColor = "important";
    // } else {
    // textColor = "notimportant";
    // }
    return (
        <li onClick={e => handleChange(e, myGig.id)} className={textColor}> 
            {myGig.keikkakuvaus} 
            <button onClick ={e => handleDelete(e,myGig.id)}>Poista</button>
        </li>
    )
}
 
const Gigs = ({myGigs, setGigs}) => {
    const handleDelete = (e, id) => {
        e.stopPropagation();
        GigService.remove(id)
        .then(resp => setGigs(myGigs.filter(n => n.id != id)))
    }
    const handleChange = (e, id) => {
        e.stopPropagation();
        const tempGig = myGigs.filter(n => n.id === id)[0]
        GigService.update(id, {...tempGig, important: !(tempGig.important)})
        .then(updatedGig => setGigs(myGigs.map(n => {
            if(n.id === id){
                n = updatedGig
            }
            return n;
        })))
    }
    console.log ("kiekat",myGigs);
 return (
    <div className="part" >
        <ul className="Gigs">

        {/* <Gig myGig = {myGigs[0]} handleChange={handleChange} handleDelete={handleDelete}/> */}
        {myGigs.map(gig => <Gig handleChange={handleChange} handleDelete={handleDelete} myGig={gig} key={gig.id} />)}
        </ul>
    </div>
 )
}
 
export default Gigs;