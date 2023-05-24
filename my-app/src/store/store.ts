import {configureStore} from "@reduxjs/toolkit";
import {countryApi, openIAApi} from "../services";
import contextSlice from "./ContextSlice";

export const store = configureStore({
    reducer: {
        context: contextSlice,
        [countryApi.reducerPath]: countryApi.reducer,
        [openIAApi.reducerPath]: openIAApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware, openIAApi.middleware),
});