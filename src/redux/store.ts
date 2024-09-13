import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import modalSlice from "./features/ModalState/modalSlice";
import CartSlice from "./features/cart/CartSlice";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        modal: modalSlice,
        cart: CartSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch