import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: "XYZ786",
    name: "Lolito"
}

export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: "ABC",
            name: "Francis"
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button onClick={login} className="btn btn-outline-primary">
                Login
            </button>
            {
                !user ? <pre>No hay usuario</pre> :
                <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}
