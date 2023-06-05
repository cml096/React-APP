import { configureStore } from '@reduxjs/toolkit';
import { countryApi, nasaApi, openAIApi } from '../services';
import contextSlice from './ContextSlice';

export const store = configureStore({
    reducer: {
        context: contextSlice,
        [countryApi.reducerPath]: countryApi.reducer,
        [openAIApi.reducerPath]: openAIApi.reducer,
        [nasaApi.reducerPath]: nasaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            countryApi.middleware,
            openAIApi.middleware,
            nasaApi.middleware,
        ),
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
