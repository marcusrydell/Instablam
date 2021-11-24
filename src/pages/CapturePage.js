import React, {useState, useRef, useEffect} from 'react'
import Webcam from 'react-webcam'

import style from '../styles/capturePage.module.css'
function CapturePage() {

    const [imageTaken, setImageTaken] = useState([]);
    const webcamRef = useRef(null)

    const videoConstraints= {
        facingMode: 'user'
    }
    
    function captureImage(){
        const imgSrc = webcamRef.current.getScreenshot();
        const imgInfo = {
            src: imgSrc,
            date: new Date().toLocaleDateString(),
            location: 'temp'
        }
        setImageTaken(imageTaken => [...imageTaken, imgInfo])
    }
    useEffect(() => {
        const previousData = JSON.parse(localStorage.getItem('data'));
        if(previousData){
            setImageTaken([...previousData])
        }
    },[])

    useEffect(() => {
            localStorage.setItem('data', JSON.stringify(imageTaken))
    }, [imageTaken])

    return (
        <div>
           <div className={style.webcamWrapper}>
            <Webcam 
                audio={false}
                ref={webcamRef}
                videoConstraints={videoConstraints}
                width={600}
                height={490}
                screenshotFormat="image/jpeg"
            />
            </div>
            <button onClick={captureImage}>Take a photo</button>
        </div>
    )
}

export default CapturePage
