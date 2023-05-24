import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RequestMethod, ResponseTypes} from "../utils/shared.utils";
import {ChatBodyRequest, Model} from "../types";

const apiKey = '';

export const openIAApi = createApi({
    reducerPath: 'openIA',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openai.com/v1',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `Bearer ${apiKey}`);
            return headers;
        }
    }),
    tagTypes: ['chat'],
    endpoints: (builder) => ({
        getModels: builder.query<ResponseTypes<Model[]>, void>({
            query: () => `/models`,
            providesTags: [{ type: "chat", id: "LIST" }],
        }),
        getModelByName: builder.query<Model, string>({
            query: (name: string) => `/models/${name}`,
            providesTags: [{ type: "chat", id: "LIST" }],
        }),
        createMessage: builder.mutation<any, string>({
            query: (prompt: string) => {
                return {
                    url: '/completions',
                    method: RequestMethod.POST,
                    body: {
                        model: "gpt-3.5-turbo",
                        prompt,
                        temperature: 0
                    } as ChatBodyRequest,
                };
            },
        })
    })
});

export const {useGetModelsQuery, useGetModelByNameQuery, useCreateMessageMutation} = openIAApi;