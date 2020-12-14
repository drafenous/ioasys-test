import React from 'react';
import { AppRouter } from './App.router';
import { LoadingComponent } from 'components';

function App() {
    return (
        <LoadingComponent.Provider>
            <AppRouter />
        </LoadingComponent.Provider>
    );
}

export default App;
