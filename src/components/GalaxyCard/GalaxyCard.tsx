import { DEFAULT_GALAXY_IMG } from '../../utils/nasa.utils';
import { useParams } from 'react-router-dom';
import { nasaApi } from '../../services';
import { useAppSelector } from '../../hooks/useAppStore';
import type { GalaxyItem } from '../../types/nasa';

export const GalaxyCard = () => {
    const params = useParams<{ id: string }>();
    const store = useAppSelector(() => nasaApi);
    const galaxy = store
        .useGetGalaxiesQuery()
        .data?.collection.items.find(
            (galaxy: GalaxyItem) => galaxy.data[0].nasa_id === params.id,
        );

    if (!galaxy) {
        return <p>Not Found</p>;
    }

    const galaxyData = galaxy.data[0];
    const galaxyImg = galaxy.links?.length
        ? galaxy.links[0].href
        : DEFAULT_GALAXY_IMG;

    return (
        <div className={'galaxy-container'}>
            <img src={galaxyImg} alt={galaxyData.title} />
            <div className={'info-container'}>
                <div className={'keyword-container'}>
                    {galaxyData.keywords.map((keyword: string, i: number) => (
                        <span className={'keyword'} key={i}>
                            {keyword}
                        </span>
                    ))}
                </div>
                <p className={'description'}>{galaxyData.description}</p>
            </div>
        </div>
    );
};
