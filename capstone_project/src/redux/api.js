import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const capstone_api = createApi({
  reducerPath: "capstone_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
        query: (body) => ({
            url: '/api/auth/register',
            method: "POST",
            body,
        }),
    })
  })
});

export const { useRegisterMutation} = capstone_api;
