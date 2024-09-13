import { baseApi } from "../../api/baseApi";



const categoryApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getAllCategories: builder.query({

            query: () => {
                return {
                    url: "/categories",
                    method: "GET",

                }
            },
            providesTags: ['categories']

        }),

        getSingleCategoy: builder.query({

            query: (id) => ({
                url: `/categories/${id}`,
                method: "GET",

            }),
            providesTags: ['categories']
        }),

        postCategoy: builder.mutation({

            query: (data) => ({
                url: "/categories",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['categories']
        }),

        
        updateCategoy: builder.mutation({
            query: ({ id, data }) => ({
                url: `/categories/${id} `,
                method: "PUT",
                body: data,

            }),
            invalidatesTags: ['categories']
        }),

        deleteCategoy: builder.mutation({
            query: (params) => {

                return {
                    url: `/categories/${params}`,
                    method: "DELETE",

                }

            },
            invalidatesTags: ['categories']
        }),

    })
})



export const {
    useGetAllCategoriesQuery,
    useGetSingleCategoyQuery,
    usePostCategoyMutation,
    useUpdateCategoyMutation,
    useDeleteCategoyMutation

} = categoryApi;