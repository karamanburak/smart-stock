import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",

    initialState: {
        categories:[],
        brands:[],
        firms:[],
        products:[],
        purchases:[],
        sales:[],
        loading:false,
        error:false
    },
    reducers: {
        fetchStart: state => {
            state.loading = true;
            state.error = false;
        },
    
        //! 1.yol !\\
        getSuccess : (state, {payload:{data,url}}) => {
            // console.log(payload);
            state.loading =false;
            state[url] = data; // state["brands"] - state["firms"]

        },

        //! 2.yol !\\
        // getSuccess : (state,{payload}) => {
        //     console.log(payload);
        //     state.loading =false;
        //     // state.brands = payload;
        //     state[payload.url] = payload.data;

        // },
        fetchFail: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchStart,
    getSuccess,
    fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
