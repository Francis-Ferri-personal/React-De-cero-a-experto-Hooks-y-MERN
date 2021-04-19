import React from 'react'

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to=".7" className="navbar-brand">useContext</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="./" className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink exact activeClassName="active" to="./about" className="nav-link">About</NavLink>
                        <NavLink exact activeClassName="active" to="./login" className="nav-link" >Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// {/* <nav>
//     <ul>
//         {/* No utilizar este tipo de enlaces por que refrescan la pagina */}
//         {/* <li><a href="./">Home</a></li> */}
//         <li>
//             <Link to="./">Home</Link>
//         </li>
//         <li>
//         <Link to="./about">About</Link>
//         </li>
//         <li>
//         <Link to="./login">Login</Link>
//         </li>
//     </ul>
// </nav> */}