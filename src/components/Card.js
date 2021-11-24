import React from 'react'
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/md'
import {BsDownload} from 'react-icons/bs'
function Card({info, index, deleteImage}) {
    function downloadImage(){
        console.log('download',info.src)

    }

    return (
        <Wrapper>
            <BtnWrapper>
                <Btn onClick={downloadImage}> <BsDownload /> </Btn>
                <Btn onClick={() => {
                    deleteImage(index)
                }}> <MdDeleteForever /> </Btn>
            </BtnWrapper>
            <Image
                src={info.src} 
            />
            <Info>{info.date}
            {info.location}
            </Info>
        </Wrapper>

   
    )
}

export default Card

const Wrapper = styled.div`
    border: 1px solid rgba(0,0,0, 0.1);
    padding: 1rem;
    overflow: hidden;
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
	width: 60%;
	height: 60%;
`;
const BtnWrapper = styled.div`
    display: flex;
    padding: 0.25rem;
`

const Btn = styled.a`
    padding: 0.1rem;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    &:hover{
        mouse-event: pointer;
        color: rgba(0,0,0, 0.55);
    }
`

const Info = styled.p`
    padding: 0;
    display: flex;

`