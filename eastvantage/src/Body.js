import { useState, useEffect } from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
import User from "./User";
const Body = () => {
    const [isLoadingInfo, setLoadingInfo] = useState(true);
    const randomUserAPI = axios.create({ baseURL: "https://randomuser.me/api" });

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const response = await randomUserAPI.get();
            localStorage.setItem('userInfo', JSON.stringify(response.data.results[0]));
        } catch (e) {
            localStorage.setItem('userInfo', JSON.stringify(e));
        } finally {
            setLoadingInfo(false);
        }
    }

    return (
        <>
            <CustomButton fetchUserInfo={fetchUserInfo} setLoadingInfo={setLoadingInfo} />
            {isLoadingInfo ? <div className="loading-class">loading...</div> : <User />}
        </>
    )
}

export default Body;