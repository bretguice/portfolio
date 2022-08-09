import React, {useState} from 'react';
import Image from 'next/image';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import classes from './ImageSlider.module.css';

const ImageSlider = ({images}) => {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImg = () =>{
        setCurrentImg(currentImg === images.length - 1 ? 0  : currentImg + 1)
    }

    const prevImg = () =>{
        setCurrentImg(currentImg === 0? images.length - 1 : currentImg - 1)
    }
  
    return (
    <div className={classes.container}>
        <FaArrowAltCircleLeft className={classes.left} onClick={prevImg} />
        <FaArrowAltCircleRight className={classes.right} onClick={nextImg} />
        {images.map((image, index) =>{
            return(
                <div className={index === currentImg ? 'image active' : 'image'} style={{outlineColor: '#000', outlineStyle: 'solid', outlineWidth: '1px'}} key={index}>
                    {index === currentImg && (<Image className={classes.image} src={image} height={'400px'} width={'575px'} alt='image' />)}
                </div>
            )
        })}    
    </div>
  )
}

export default ImageSlider