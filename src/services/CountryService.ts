import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RequestMethod, ResponseType } from '../utils/shared.utils';
import type { Country } from '../types/country';

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['countries'],
    endpoints: (builder) => ({
        getAllCountries: builder.query<Country[], void>({
            query: () => {
                return {
                    url: '/independent',
                    method: RequestMethod.GET,
                    params: {
                        status: true,
                        fields: ['languages', 'capital'].join(','),
                    },
                };
            },
            providesTags: [{ type: 'countries', id: ResponseType.LIST }],
        }),
    }),
});

export const { useGetAllCountriesQuery } = countryApi;
