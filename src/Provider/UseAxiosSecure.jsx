import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";



const axiosSecure = axios.create({
  baseURL: 'https://game-server-blue.vercel.app'
});

const UseAxiosSecure = () => {
   const navigate = useNavigate()
   const { logOut } = UseAuth();
   //request intersectprs to add authorization headers for every secure call to the api



  // এখানে axiosSecure-এর ইন্টারসেপ্টর ব্যবহার করা হচ্ছে

  //here  i use the  axiosSecure interceptor
  axiosSecure.interceptors.request.use(function (config) {
   const token =   localStorage.getItem('access-token')
    // console.log('request stopped by interceptors',token);
    config.headers.authorization = `Bearer ${token}`;
   
    return config;
  }, function (error) {
    //the error handeling of the request 
    return Promise.reject(error);
  });

 


//   intercepts 401 and 403 status
axiosSecure.interceptors.response.use(
   function (response) {
     return response;
   },
    async(error)=> {
      const status = error.response?.status;
    //  console.log('status error in the interceptors', status);
     //here 401 and 403 logout the page and send the user to the login page
     if(status === 401 ||status === 403){
      await logOut();
      navigate('/login');

     }
     return Promise.reject(error);
   }
 );
 

  return axiosSecure;
};

export default UseAxiosSecure;
