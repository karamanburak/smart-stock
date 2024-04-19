import { useSelector, useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const useStockCall = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)


    //* DRY
    //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
    const getStockData = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios(`${BASE_URL}${url}`, {
                headers: {
                    Authorization: `Token ${token}`,
                    // Authorization: `Bearer ${accesstoken}` //* jwt için
                },
            });
            console.log(data);
            // dispatch(brandsSuccess(data.data));
            // dispatch(getSuccess({data:data.data,url:url}));//* action creatorlar her zaman tek bir parametre kabul ederler
            dispatch(getSuccess({ data: data.data, url }));//* action creatorlar her zaman tek bir parametre kabul ederler
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }
    };

    return {getStockData }
};

export default useStockCall;
