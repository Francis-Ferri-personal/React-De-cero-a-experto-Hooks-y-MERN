import React from 'react'; //Permite usar JSX
import ReactDOM from 'react-dom'; // Permite manipular el DOM
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css' 

const divRoot = document.querySelector("#app");


// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku"/>, divRoot);
// ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/>, divRoot);

ReactDOM.render(<CounterApp value={10}/>, divRoot);



 