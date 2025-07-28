import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";


const UseAuth = () => {

    const auth = useContext(AuthContext);
    return auth;

};

export default UseAuth;

// here i am  using the Context API and there is a Context Object named AuthContext,
// which is used to store authentication-related data (such as: user login status, user info, token, etc.)
