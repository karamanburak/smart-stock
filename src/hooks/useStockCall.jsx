import { useSelector, useDispatch } from "react-redux";
import { fetchFail, fetchStart, getProCatBrandSuccess, getSuccess } from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL
const useStockCall = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const axiosWithToken = useAxios()


    //* DRY
    //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
    const getStockData = async (url) => {
        dispatch(fetchStart());
        try {
            // const { data } = await axios(`${BASE_URL}${url}`, {
            //     headers: {
            //         Authorization: `Token ${token}`,
            //         // Authorization: `Bearer ${accesstoken}` //* jwt için
            //     },
            // });
            const { data } = await axiosWithToken.get(`${url}`)
            console.log(data);
            // dispatch(brandsSuccess(data.data));
            // dispatch(getSuccess({data:data.data,url:url}));//* action creatorlar her zaman tek bir parametre kabul ederler
            dispatch(getSuccess({ data: data.data, url }));//* action creatorlar her zaman tek bir parametre kabul ederler
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }
    };
    const deleteStockData = async (url,id) => {
        dispatch(fetchStart());
        try {
            // await axios.delete(`${BASE_URL}${url}/${id}`, {
            //     headers: {
            //         Authorization: `Token ${token}`,
            //     },
            // });
         await axiosWithToken.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }finally{
            getStockData(url)
            toastSuccessNotify(`Item successfully deleted!`)
        }
    };
    const postStockData = async (url,info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.post(`${url}`,info)
            toastSuccessNotify("Item successfully added!")
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(`There is another company with name ${info.name}! Please try another name!` )
        }finally{
            getStockData(url)
        }
    };
    const putStockData = async (url,info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.put(`${url}/${info._id}`,info)
            toastSuccessNotify("Item successfully changed")
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());

        }finally{
            getStockData(url)
        }
    };

    const getProCatBrand = async () => {
        dispatch(fetchStart());
        try {
            const [products,categories,brands,firms,purchases] = await Promise.all([
                axiosWithToken("products"),
                axiosWithToken("categories"),
                axiosWithToken("brands"),
                axiosWithToken("firms"),
                axiosWithToken("purchases"),
                
            ])
            dispatch(getProCatBrandSuccess([products?.data?.data, categories?.data?.data, brands?.data?.data, firms?.data?.data,purchases?.data?.data]))
        } catch (error) {
            dispatch(fetchFail());

        }

    }

    return { 
        getStockData, 
        deleteStockData, 
        postStockData, 
        putStockData,
        getProCatBrand,
    }
};

export default useStockCall;
