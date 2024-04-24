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
        getProCatBrandSuccess : (state, {payload}) => {
            state.loading = false;
            state.products = payload[0];
            state.categories = payload[1];
            state.brands = payload[2];

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
    getProCatBrandSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
