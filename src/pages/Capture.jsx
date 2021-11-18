import React, {useRef, useState} from 'react'
import {GrGallery} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import Webcam from 'react-webcam'
//Fix time + location of image taken
const galleryIconStyle = {
    fontSize: '3rem'
}
function Capture() {

const [imageTaken, setImageTaken] = useState('');
const [images, setImages] = useState([])
const videoConstraints= {
    widht: 400,
    height: 400,
    facingMode: 'user'
}
const webcamRef = useRef(null)

function captureImage(){
    const imgSrc = webcamRef.current.getScreenshot();
    setImageTaken(imgSrc)
    setImages(images =>[...images, imgSrc])
    localStorage.setItem('Image', JSON.stringify(images))
}

    return (
        <>
        <h2>Capture image</h2>
        <Link to="/">
            <GrGallery style={galleryIconStyle} />
        </Link>
            <Webcam
                audio={false}
                ref={webcamRef}
                videoConstraints={videoConstraints}/>
            <button onClick={captureImage}>Take a photo</button> 
            <img src={imageTaken} ></img>
    </>)
}

export default Capture