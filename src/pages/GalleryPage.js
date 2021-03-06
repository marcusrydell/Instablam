import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import {saveAs} from 'file-saver'
export default function GalleryPage() {

    const [storedImages,setStoredImages] = useState(JSON.parse(localStorage.getItem('data')));
    const [imageArr, setImageArr] = useState(storedImages);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        setImageArr(storedData)
    }, [storedImages])

    async function downloadImage(index){
        const download = await fetch(storedImages[index].src)
        const blob = await download.blob();
        saveAs(blob, 'image.jpg')
    }
    function deleteImage(index){
        imageArr.splice(index, 1);
        console.log('detl', index)
        localStorage.setItem('data', JSON.stringify(imageArr))
        setStoredImages(imageArr);
    }

    return (
        <div>
            <Grid >
                {imageArr?.map((img, index)=> (
                    <Card info={img} key={index} index={index} deleteImage={deleteImage} downloadImage={downloadImage}/>
                ))}
            </Grid>
        </div>
    )
}


const Grid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
`;