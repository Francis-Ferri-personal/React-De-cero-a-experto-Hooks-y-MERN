import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoors] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
        const mouseMove = (e) => {
            const coords = {x:e.x, y:e.y};
            // console.log(coors);
            setCoors(coords);
        }
        
        window.addEventListener('mousemove', mouseMove);
        
            /* window.addEventListener('mousemove', (e) => {
            // console.log(e);
            // const coors = {x:e.x, y:e.y};
            // console.log(coors);
            console.log(":D")
        } ) */
        // console.log("comoponente montado");
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            // console.log("componente desmontado");
        }
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
