import React, {useState} from 'react';
import '../App.css';
        
const ImageInfo =({imageData, addStuff}) => {
    // console.log(imageData.title);
    const [show,setShow] = useState(true);

    if(show){
        return(
            <div>
            <h1 onClick={e => setShow(true)}> {imageData.title}</h1>
            <img className="imagelist" src={imageData.url} alt={imageData.title} />
            
            </div>
        ) } else {
            return (
                <div>
                    <h1 onClick={e => setShow(true)}> {imageData.title} </h1>
                </div>
            )
            }
    }
const ImagesInfo = ({images, updateImages}) => {
    const addStuff = id => {
        const tempImages = [...images];
        tempImages.find(img => img.id === id).amount++;
        updateImages(tempImages);
}

  
    

    return (
        <div class="row">
            {images.map(img => (
                <ImageInfo imageData={img} key={img.id} addStuff = {addStuff}/>
            ))}
        </div>
    )
}

export default ImagesInfo;