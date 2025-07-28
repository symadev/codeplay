import axios from "axios";


const UseAxiosPublic = () => {
     const axiosSecure = axios.create({
        baseURL:'https://game-server-blue.vercel.app'
    })
    return axiosSecure;
};

export default UseAxiosPublic;