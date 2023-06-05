import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Home, Login, Profile, Galaxies, Features } from './views';
import { GalaxyCard } from './components';

export enum AppRoutes {
    GALAXIES = '/galaxies',
    FEATURES = '/features',
    HOME = '/',
    PROFILE = '/profile',
    LOGIN = '/login',
}

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path={AppRoutes.FEATURES} element={<Features />} />
            <Route path={AppRoutes.GALAXIES} element={<Galaxies />}>
                <Route path={':id'} element={<GalaxyCard />} />
            </Route>
            <Route path={AppRoutes.HOME} element={<Home />} />
            <Route path={AppRoutes.PROFILE} element={<Profile />} />
            <Route path={AppRoutes.LOGIN} element={<Login />} />
            <Route path={'*'} element={<h1>Not Found</h1>} />
        </ReactRoutes>
    );
};

export default Routes;
