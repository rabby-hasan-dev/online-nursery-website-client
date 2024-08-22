import { createSlice } from "@reduxjs/toolkit";

// interface IInitialState {
//     isOpen: boolean
// }

const initialState = {
    isOpen: false,
    id: '',


}

const modalSlice = createSlice({

    name: "modal",
    initialState,
    reducers: {
        openModal: (state, actions) => {
            state.isOpen = true;
            if (actions.payload) {
                state.id = actions?.payload;
            }

        },
        closeModal: (state) => {
            state.isOpen = false;
            state.id ='';

        },
    }
})





export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer;
