import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    //? Metodo con custom hook
    const {loading,data} = useFetchGifs(category);

    //? Metodo con helpers
   // const [images,setImages]=useState([]);
    // useEffect(()=>{
    //     const resp = getGifs(category);
    //     resp.then(data=>setImages(data))
    // },[category]);

    return ( 
        <div>
            <h3>{category}</h3>
            {loading 
                ? <p>Loading</p> 
                : <ul className='grid' >
                    {data.map(image=>(
                        <GifGridItem key={image.id} {...image} />
                    ))}
                </ul>
            }  
        </div>
    );
}
 
export default GifGrid;