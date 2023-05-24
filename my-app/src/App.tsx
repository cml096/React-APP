import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from "./store";
import Routes from "./routes";
import {NavBar} from "./components";
import {AuthProvider} from "./auth/auth";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <NavBar />
                <Routes />
            </AuthProvider>
        </Provider>
    );
}

export default App;
