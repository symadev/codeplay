// LoginModal.jsx
import Modal from "react-modal";
import { useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";

// Required by react-modal
Modal.setAppElement("#root");

const Login = ({ isOpen, onRequestClose }) => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        onRequestClose(); // close modal
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error("Login Failed: " + err.message);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login"
      overlayClassName="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/60 to-blue-900/80 backdrop-blur-sm flex justify-center items-center z-50"
      className="bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900 text-white p-8 rounded-3xl w-full max-w-md border border-indigo-400/30 relative shadow-2xl shadow-indigo-500/20"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 text-indigo-300 hover:text-white text-2xl transition-all duration-300 hover:rotate-90 hover:scale-110"
      >
        &times;
      </button>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-lg"></div>

      <div className="text-center mb-8 relative z-10">
        <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          CodePlay Login
        </h2>
        <p className="text-sm text-indigo-200 mt-2">
          Play the game with codePlay
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6 relative z-10">
        <div className="relative">
          <label className="block text-sm text-indigo-200 mb-2 font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-xl placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="example@email.com"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm text-indigo-200 mb-2 font-medium">Password</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-xl placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="••••••••"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Login
          </span>
        </button>
      </form>

      <div className="flex justify-between mt-6 text-sm text-indigo-200 relative z-10">
        <Link 
          to="/forgot-password" 
          className="hover:text-blue-400 transition-colors duration-300 hover:underline"
        >
          Forgot Password?
        </Link>
        <Link 
          to="/register" 
          className="hover:text-blue-400 transition-colors duration-300 hover:underline"
        >
          Sign Up
        </Link>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
    </Modal>
  );
};

export default Login;