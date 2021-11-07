import React from 'react';

const GifGridItem = ({title,url}) => {

    return ( 
        <div className='grid__card animate__animated animate__fadeInDown' >
            <h3>{title}</h3>
            <img src={url} alt={title} />
        </div>

    );
}
 
export default GifGridItem;