import React, {useState} from 'react';
import './App.css';
import Country from "./components/Country";
import { Provider } from 'react-redux';
import {store} from "./store";

const App: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hi World</h1>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)} >Increase</button>
                <br/>
                <Country />
            </div>
        </Provider>
    );
}

export default App;
