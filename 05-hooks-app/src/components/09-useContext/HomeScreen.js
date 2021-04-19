import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    // UseContext buca la instancia del contexto especificado en el arbol de componentes
    const {user} = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <h1>HomeScreeen</h1>
            <hr/>
            <pre className="container">{JSON.stringify(user, null, 3)}</pre>
        </div>
    )
}
