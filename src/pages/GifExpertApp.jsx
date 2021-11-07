import React,{Fragment, useState} from 'react';
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';

const GifExpertApp = () => {

    const [categories,setCategories]=useState(['One Piece'])


    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} categories={categories} />
            <hr />

            <ul>
                {categories.map((category,index)=>(
                    <GifGrid key={category} category={category} />
                ))}
            </ul>
        </Fragment>
    )

}
 
export default GifExpertApp;