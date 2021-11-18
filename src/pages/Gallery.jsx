import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiFillCamera} from 'react-icons/ai'

const iconStyle = {
    color: 'black',
    opacity: '0.65',
    fontSize: '3rem'
}

function Gallery() {
     const images = JSON.parse(localStorage.getItem('Image'))
    
    return (
        <div>
            <h2>Gallery</h2>
            <Link to="Capture">
                <AiFillCamera style={iconStyle}/>
            </Link>

            <div className="imageContainer">
                {images?.map((img)=>{
                    return <img src={img}></img>
                })}
            </div>
        </div>
    )
}

export default Gallery
