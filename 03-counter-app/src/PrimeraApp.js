/* import React, { Fragment } from 'react'; */
import React from 'react';
import PropTypes from 'prop-types';
// FC
// const PrimeraApp = ( {saludo="Hola Mundo"} ) => {
const PrimeraApp = ( {saludo, subtitulo} ) => {
    
    // const saludo = "Hola Mundo";

    /* if (!saludo){
        throw new Error("El saludo es necesario");
    } */

    return (
        <>
            <h1>{saludo}!!!</h1>
            {/* para hacer comentariopos usa Control + } */}
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
    // subtitulo: "" // A veces se hace asi ppara saber cuales propiedades son opcionales
}

export default PrimeraApp;
