
import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getProuct: builder.query({
            query: (params) =>{       
              return  {
                    url: "/products",
                    method: "GET",
                    params: params
    
                }
            },
            providesTags: ['product']

        }),

        getSingleProuct: builder.query({
            query: (id) => ({
                url: `/products/singleProduct/${id}`,
                method: "GET",
               
            }),
        }),

        postProudct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['product','categories']
        }),
        updateProudct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id} `,
                method: "PUT",
                body: data,
               
            }),
            invalidatesTags: ['product']
        }),
        deleteProudct: builder.mutation({
            query: (params) => {
                return {
                    url: `/products/${params}`,
                    method: "DELETE",

                }




            },
            invalidatesTags: ['product','categories']
        }),

    })
})



export const {
     useGetProuctQuery,
      usePostProudctMutation,
       useDeleteProudctMutation,
      useGetSingleProuctQuery,
      useUpdateProudctMutation,
     } = productApi;