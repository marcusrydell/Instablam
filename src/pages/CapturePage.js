import React, {useState, useRef, useEffect} from 'react'
import Webcam from 'react-webcam'

import style from '../styles/capturePage.module.css'
function CapturePage() {

    const [imageTaken, setImageTaken] = useState([]);
    const [adress,setAdress] = useState({})
    const webcamRef = useRef(null)

    const videoConstraints= {
        facingMode: 'user'
    }
    useEffect(() => {
        const onSuccess = async (pos) =>{
            const adress = await lookUpPosition(pos.coords.latitude, pos.coords.longitude)
            if(adress){ 
                setAdress({
                    country: adress.prov,
                    city: adress.city
                }) 
            }    
        }
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(onSuccess,(error)=>{
                    setAdress({error: error.message})
                }
            )
        }

    
    }, [])


    async function lookUpPosition(lat,long){
        try{
            const response = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=216031875532726209583x64218`)
            const data = await response.json()
            console.log(data)
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
            location: adress.city
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
