import { useSelector, useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";

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
        }
    };
    const postStockData = async (url,info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.post(`${url}`,info)
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }finally{
            getStockData(url)
        }
    };
    const putStockData = async (url,info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.put(`${url}/${info._id}`,info)
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }finally{
            getStockData(url)
        }
    };

    return { 
        getStockData, 
        deleteStockData, 
        postStockData, 
        putStockData,
    }
};

export default useStockCall;
