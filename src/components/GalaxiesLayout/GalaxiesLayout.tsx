import { Link } from 'react-router-dom';
import { GalaxyItem } from '../../types/nasa.type';

interface GalaxiesLayoutProps {
  galaxies: Array<GalaxyItem>;
}

export const GalaxiesLayout = (props: GalaxiesLayoutProps) => {
  const { galaxies } = props;

  const renderGalaxiesList = (galaxy: GalaxyItem) => {
    const galaxyData = galaxy.data[0];
    const galaxyId = galaxyData.nasa_id;
    return (
      <div>
        <h3 className={'title'}>{galaxyData.title}</h3>
        <Link to={galaxyId}>more...</Link>
      </div>
    );
  };

  return (
    <div className={'galaxies-container'}>
      {galaxies.map((galaxy) => (
        <div key={galaxy.data[0].nasa_id}>{renderGalaxiesList(galaxy)}</div>
      ))}
    </div>
  );
};
