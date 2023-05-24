import {Routes as ReactRoutes, Route} from "react-router-dom";
import {Country} from "./components";
import {Home, Login, Profile} from "./views";

export enum AppRoutes {
    COUNTRIES = '/countries',
    HOME = '/',
    PROFILE = '/profile',
    LOGIN = '/login'
}

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path={AppRoutes.COUNTRIES} element={<Country />}>
                <Route path={':county_id'} element={<Country />} />
            </Route>
            <Route path={AppRoutes.HOME} element={<Home />} />
            <Route path={AppRoutes.PROFILE} element={<Profile />} />
            <Route path={AppRoutes.LOGIN} element={<Login />} />
            <Route path={'*'} element={<h1>Not Found</h1>}/>
        </ReactRoutes>
    );
}

export default Routes;