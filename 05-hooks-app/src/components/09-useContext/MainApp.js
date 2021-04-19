import React, { useState } from 'react'
import { AppRouer } from './AppRouer'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});
    /* const user = {
        id: 1234,
        name: "Francis",
        email: "francisferri@gmail.com"
    } */
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouer />
        </UserContext.Provider>
    )
}
