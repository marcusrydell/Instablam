import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiFillCamera} from 'react-icons/ai'
import style from '../styles/Gallery.module.css'
const iconStyle = {
    color: 'black',
    opacity: '0.65',
    fontSize: '3rem'
}

function Gallery() {
    const images = JSON.parse(localStorage.getItem('Images'))
    console.log(images)
    return (
        <div>
            <h2>Gallery</h2>
            <Link to="Capture">
                <AiFillCamera style={iconStyle}/>
            </Link>

            <div className={style.imageContainer}>
                {images.map((img)=>{
                    return <img src={img}></img>
                })}
            </div>
        </div>
    )
}

export default Gallery
