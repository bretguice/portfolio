import React from 'react';
import Image from 'next/image';
import classes from './SingleImage.module.css';

const SingleImage = ({ image, projectTitle }) =>{

    return(
        <div className={classes.container} >
            <Image className={classes.img} src={image} height={'400px'} width={'575px'} alt={projectTitle} />
        </div>
    )

}

export default SingleImage;