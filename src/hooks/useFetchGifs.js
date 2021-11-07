import { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category)=>{

    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        
        const resp = getGifs(category);
        resp.then( data=>{
            setstate({
                data,
                loading:false
            })
        } )


    }, [category])

    return state
}