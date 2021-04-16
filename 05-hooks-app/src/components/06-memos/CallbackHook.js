import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    
    /* const incrementar = () => {
        setCounter(counter + 1);
    }; */

    // Regresa una verion memorizadas de la funcion
    const incrementar = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ???
    }, [incrementar]);

    return (
        <div>
            <h1>UseCallback Hook: { counter }</h1>
            < ShowIncrement increment={ incrementar }/>
        </div>
    )
}
