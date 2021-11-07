import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

const AddCategory = ({setCategories,categories}) => {

    const [formValue,setFormValue]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(formValue.trim().length>2){
            setCategories([formValue,...categories]);
            setFormValue('');
        }

    }
    return ( 
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    name="category" 
                    placeholder='Add a category'
                    autoComplete="off"
                    onChange={(e)=>setFormValue(e.target.value)}
                    value={formValue}
                />
            </form>
     );
}

AddCategory.propTypes ={
    categories:PropTypes.array.isRequired,
    setCategories:PropTypes.func.isRequired
}
 
export default AddCategory;