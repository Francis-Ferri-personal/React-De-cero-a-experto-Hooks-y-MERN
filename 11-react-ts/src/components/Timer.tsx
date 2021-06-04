import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number
    // segundos?: number
}

export const Timer = ({milisegundos}: TimerArgs) => {
    const [segundos, setSegundos] = useState(0);

    const ref  = useRef<NodeJS.Timeout>();

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        // Al hacerlo de esta manera se evita la dependencia de segundos que hacia qyue caiga en un bucle infinito
        ref.current = setInterval(() => setSegundos(seg => seg + 1), milisegundos)
    }, [milisegundos]);

    return (
        <>
          <h4>Timer: <small>{segundos}</small></h4>  
        </>
    )
}
