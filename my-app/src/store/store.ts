import {configureStore} from "@reduxjs/toolkit";
import {countryApi} from "../services";
import contextSlice from "./ContextSlice";

export const store = configureStore({
    reducer: {
        context: contextSlice,
        [countryApi.reducerPath]: countryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
});