import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            // setCategories(cats => [inputValue, ...cats]);
            setCategories(cats => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            {/* <h1>{inputValue}</h1> */}
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}    
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export {AddCategory};
/* 
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
    // subtitulo: "" // A veces se hace asi ppara saber cuales propiedades son opcionales
}

*/