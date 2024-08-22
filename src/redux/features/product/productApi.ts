
import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getProuct: builder.query({
            query: (params) =>{  
                console.log(' product api inside', params);      
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
            invalidatesTags: ['product']
        }),
        updateProudct: builder.mutation({
            query: ({ name, data }) => ({
                url: "/products",
                method: "PUT",
                body: data,
                params: name,
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
            invalidatesTags: ['product']
        }),

    })
})



export const {
     useGetProuctQuery,
      usePostProudctMutation,
       useDeleteProudctMutation,
      useGetSingleProuctQuery
     } = productApi;