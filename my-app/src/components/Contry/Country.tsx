import React from "react";
import {useGetAllCountriesQuery} from "../../services";

export const Country: React.FC = () => {
    const { data, error, isLoading } = useGetAllCountriesQuery()

    const getLanguages = (obj: {[key: string]: string}): string => {
        const arr = [];
        for(const prop in obj){
            arr.push(obj[prop]);
        }
        return arr.join(' ,')
    }

    if(isLoading){
        return <p>Loading ...</p>;
    }

    if(error){
        return <p>We have a problem now, try en other moment</p>;
    }

    return (
        <div>
            {data?.map(({capital, languages}, index) => (
                <li key={index}>
                    {`capital: ${capital.join(' ')} - languages: ${getLanguages(languages)}`}
                </li>
            ))}
        </div>
    );
}