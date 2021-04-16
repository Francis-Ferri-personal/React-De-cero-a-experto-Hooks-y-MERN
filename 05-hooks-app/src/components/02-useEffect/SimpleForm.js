import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    
    const {name, email} = formState;

    useEffect(
        () => {console.log("hey!")},
        []
    );
    
    // Este va a ocurrir una vez al inicio porque inicializa el state
    useEffect(
        () => {console.log("FormState cambió")},
        [formState]
    );
    useEffect(
        () => {console.log("Email cambió")},
        [email]
    );

    const handleInputChnage = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
          <h1>useEffect</h1>
          <hr/>
          <div className="form-group">
            <input 
                type="text" 
                name="name" 
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChnage}
            />
          </div>
          <div className="form-group">
            <input 
                type="text" 
                name="email" 
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChnage}
            />
          </div>

          { (name === '123') && <Message />}
        </>
    )
}
