import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 10}) => {
    
    // const [nombre, setNombre] = useState("Goku");
    const [counter, setCounter] = useState(value);

    // HandleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // esto sirve si se tiene acceso a la variable
        //setCounter((c) => c +1); 
    }

    const handleReset = () => setCounter(value);

    const handleSubstract = () => setCounter(counter - 1);

    // SOlo para ver que es posible, peo parece malapractica
    /* const handleAdd = (e) => {
        return () => console.log("Hola mundo");
    } */

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
            {/* <button onClick={ handleAdd() }>+1</button> */}
        </>
    );
}

CounterApp.protoTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProp = {
    value: 123
}

export default CounterApp;
