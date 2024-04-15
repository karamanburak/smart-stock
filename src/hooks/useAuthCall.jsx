import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post("https://18109.fullstack.clarusway.com/users/", userInfo)
            console.log(data);
            dispatch(registerSuccess(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
            
        }
    }
    return {register}
};
export default useAuthCall;
