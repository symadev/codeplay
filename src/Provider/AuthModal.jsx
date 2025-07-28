import { useState } from "react";


import SignUp from "../Components.jsx/SignUp";
import Login from "../Components.jsx/Login";

const AuthModal = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    // Open login modal and ensure register modal is closed
    const openLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    // Open register modal and ensure login modal is closed
    const openRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <>
            {/* Buttons to open modals */}
            <button onClick={openLogin}>Open Login</button>
            <button onClick={openRegister}>Open Register</button>

            <Login
                isOpen={showLogin}
                onRequestClose={() => setShowLogin(false)}
               openRegister={openRegister}  // This passes the open register function correctly
            />


            {/* Register Modal */}
            <SignUp
                isOpen={showRegister}
                onRequestClose={() => setShowRegister(false)}
                openLogin={openLogin}  // Optional: pass to switch back to login
            />
        </>
    );
};

export default AuthModal;






/* 

AuthModal is a component which is do the work like :
manage the state , showlogin:check that if the login modal is open , showregisrer:check that  if the register modal is open , 
give  the control functions, open login :it opens the login modal and shut the registar modal,
open register :it opens the register modal and shut the login modal,

send the props as a child element to the other component


*/