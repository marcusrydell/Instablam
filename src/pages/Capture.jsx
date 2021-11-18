import React, {useRef, useState, useEffect} from 'react'
import {GrGallery} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import Webcam from 'react-webcam'
//Fix time + location of image taken
const galleryIconStyle = {
    fontSize: '3rem'
}
function Capture() {
   
const [imageTaken, setImageTaken] = useState(JSON.parse(localStorage.getItem('Images')));


const videoConstraints= {
    widht: 400,
    height: 400,
    facingMode: 'user'
}
const webcamRef = useRef(null)

function captureImage(){
    const imgSrc = webcamRef.current.getScreenshot();
    setImageTaken(imageTaken => [...imageTaken, imgSrc])
} 

useEffect(() => {
    localStorage.setItem('Images', JSON.stringify(imageTaken))

}, [imageTaken])

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
    </>)
}

export default Capture