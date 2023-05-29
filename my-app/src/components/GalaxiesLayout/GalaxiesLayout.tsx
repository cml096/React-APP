import {GalaxyItem} from "../../types";
import {Link} from "react-router-dom";

interface GalaxiesLayoutProps {
    galaxies: Array<GalaxyItem>
}

export const GalaxiesLayout = (props: GalaxiesLayoutProps) => {
    const {galaxies} = props

    const renderGalaxiesList = (galaxy: GalaxyItem) => {
        const galaxyData = galaxy.data[0];
        const galaxyId = galaxyData.nasa_id;
        return(
            <>
                <h3 className={'title'}>{galaxyData.title}</h3>
                <Link to={galaxyId}>more...</Link>
            </>
        );
    }

    return (
        <div className={'galaxies-container'}>
            {galaxies.map( galaxy =>
                <div key={galaxy.data[0].nasa_id}>
                    {renderGalaxiesList(galaxy)}
                </div>
            )}
        </div>
    );
}