import React from 'react'
import {Link} from 'react-router-dom'
import {BsCameraFill} from 'react-icons/bs'
import {BsImages} from 'react-icons/bs'
export default function Header() {
    return (
        <div>
                <Link to="/capture" className="cameraIcon">
                    <BsCameraFill />
                </Link>
                <Link to="/" className="galleryIcon">
                    <BsImages />
                </Link>
        </div>
    )
}

