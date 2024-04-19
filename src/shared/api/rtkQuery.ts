import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQuery = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: () => ({}),
    tagTypes: ['Profile'],
});
