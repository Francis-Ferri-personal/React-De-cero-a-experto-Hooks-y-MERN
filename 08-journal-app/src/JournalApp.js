import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
    // Tambien puede ir sin el div
    return (
        <Provider store={ store }>
            <AppRouter /> 
        </Provider>
    )    
}


