//import heroes, {owners} from './data/heroes';
//import {heroes, owners} from './data/heroes';
/* import heroes, {owners} from '../data/heroes'; */
import heroes from '../data/heroes';

/* console.log(owners); */
// find devuelve uno
const getHeroeById = id => heroes.find(heroe => heroe.id === id) ;

/* console.log(getHeroeById(2));
console.log(getHeroeById(3));
console.log(getHeroeById(4)); */

// filter devuelve varios
const getHeroeBytOwner = owner => heroes.filter(heroe => heroe.owner === owner);
/* console.log(getHeroeBytOwner("Marvel"));
console.log(getHeroeBytOwner("DC")); */

export {getHeroeById};