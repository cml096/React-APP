import React from "react";
import {useGetGalaxiesQuery} from "../../services";
import {GalaxiesLayout} from "../../components/GalaxiesLayout/GalaxiesLayout";
import {Outlet} from "react-router-dom";

export const Galaxies: React.FC = () => {
    const { data, error, isLoading } = useGetGalaxiesQuery()

    const renderLayout = () => {
        if(isLoading) return <p>Loading ...</p>;
        if(error) return <p>We have a problem now, try en other moment</p>;
        if(!data) return <p>Galaxies page under maintenance (?)</p>
        return (
            <>
                <Outlet/>
                <GalaxiesLayout galaxies={data.collection.items}/>
            </>
        );
    }

    return (
        <div>
            <h1>Galaxies</h1>
            {renderLayout()}
        </div>
    );
}