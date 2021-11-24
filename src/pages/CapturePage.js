import React, {useState, useRef, useEffect} from 'react'
import Webcam from 'react-webcam'

import style from '../styles/capturePage.module.css'
function CapturePage() {

    const [imageTaken, setImageTaken] = useState([]);
    const [adress,setAdress] = useState('')
    const webcamRef = useRef(null)

    const videoConstraints= {
        facingMode: 'user'
    }
    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(
                onSuccess,
                error=>{
                    setAdress({country:'Unknown ' , city: 'location'})
                }
            )
        }
    }, [])

    async function onSuccess(pos){
        const adress = await lookUpPosition(pos.coords.latitude, pos.coords.longitude)
        if(adress){ 
            setAdress(adress) 
        }    
    }

    async function lookUpPosition(lat,long){
        try{
            const response = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
            const data = await response.json()
            if(data.error){
                console.log(data.error)
            }
            return data
        }catch(error){
            
        }

    }
    function captureImage(){
        const imgSrc = webcamRef.current.getScreenshot();
        const imgInfo = {
            src: imgSrc,
            date: new Date().toLocaleDateString(),
            location: adress.country + adress.city
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
