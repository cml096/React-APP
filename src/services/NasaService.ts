import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RequestMethod, ResponseType } from '../utils/shared.utils';
import { GalaxiesResponse } from '../types/nasa.type';

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://images-api.nasa.gov',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['galaxies'],
  endpoints: (builder) => ({
    getGalaxies: builder.query<GalaxiesResponse, void>({
      query: () => {
        return {
          url: '/search',
          method: RequestMethod.GET,
          params: {
            q: 'galaxies',
          },
        };
      },
      providesTags: [{ type: 'galaxies', id: ResponseType.LIST }],
    }),
  }),
});

export const { useGetGalaxiesQuery } = nasaApi;
