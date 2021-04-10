import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    // Esto no hay que hacer por que hay que usar use state
    // const categories = ["one Punch", "Samurai X", "Dragon Ball"];

    // const [categories, setCategories] = useState(["One Punch"]);
    const [categories, setCategories] = useState(defaultCategories);

    /* const handleAdd = () => {
        //setCategories([...categories, "HunterxHunter"]);
        setCategories (cats => [...cats, "HunterxHunter"]);
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </ol>
        </>
    );
};

export default GifExpertApp;