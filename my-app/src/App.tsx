import React, {useEffect, useState} from 'react';
import './App.css';

type Request = Array<{capital: Array<string>, languages: { [key: string]: string }}>

const defaultRequest: Request = [{
    capital: [], languages: { eng: ''}
}]

const App: React.FC = () => {

    const [counter, setCounter] = useState<number>(0);
    const [request, setRequest] = useState<{data: Request, isLoading: boolean, error: boolean}>({data: defaultRequest, isLoading: false, error: false});

    useEffect(() => {
        setRequest({
            ...request,
            isLoading: true
        });
        fetch('https://restcountries.com/v3.1/independent?status=true&fields=languages,capital')
            .then(res => res.json())
            .then(data => {
                console.log('Data', { data })
                setRequest({
                    ...request,
                    data: data,
                    isLoading: false
                })
            }).catch(() => setRequest({
            ...request,
            error: true
        }))
    }, []);

    const getLanguages = (obj: {[key: string]: string}): string => {
        const arr = [];
        for(const prop in obj){
            arr.push(obj[prop]);
        }
        return arr.join(' ,')
    }

    const DataField = () => {
        const show = !request.error && !request.isLoading;
        return (
            <div>
                {request.error && <p>We have a problem now, try en other moment</p>}
                {request.isLoading && <p>Loading ...</p>}
                {show && request.data.map(({capital, languages}, index) => (
                    <li key={index}>
                        {`capital: ${capital.join(' ')} - languages: ${getLanguages(languages)}`}
                    </li>
                ))}
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Hi World</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)} >Increase</button>
            <br/>
            <DataField />
        </div>
    );
}

export default App;
