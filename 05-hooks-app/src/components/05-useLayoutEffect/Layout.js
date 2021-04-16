import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounterSimple } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "./layout.css";

export const Layout = () => {
    const {counter, increment} = useCounterSimple(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // Si se obtuvo la data entonces entrae la data en la posicion 0
    const { quote } = !!data && data[0];
    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    // console.log(author, quote);
    // console.log(state);

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag} 
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)};
            </pre>
            <button className="btn btn-primary" onClick={increment}>
                Siguinete quote
            </button>
            
        </div>
    )
}
