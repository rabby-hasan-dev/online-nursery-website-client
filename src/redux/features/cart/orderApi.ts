
import { baseApi } from "../../api/baseApi";



const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: (newOrder) => ({
                url: "/orders",
                method: "GET",
                body: newOrder,
            }),
            providesTags: ["order"],
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/orders",
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags: ["order"],
        }),

    }),
    overrideExisting: false,
});

export const { useCreateOrderMutation ,useGetAllOrderQuery } = orderApi;