import Modal from "react-modal";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
// import { toast } from "react-toastify";

Modal.setAppElement("#root");

const SignUp = ({ isOpen, onRequestClose, openLogin }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const newUser = {
          name: data.name,
          email: data.email,
          role: 'user',
          createdAt: new Date(),
        };
        // Handle success
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register"
      overlayClassName="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/60 to-blue-900/80 backdrop-blur-sm flex justify-center items-center z-50"
      className="bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900 text-white p-8 rounded-3xl w-full max-w-lg border border-indigo-400/30 relative shadow-2xl shadow-indigo-500/20"
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

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-3">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
         CodePlay SignUp
        </h2>
        <p className="text-indigo-200 text-sm mt-1">
         Play the game with codePlay
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
        {/* Name */}
        <div className="relative">
          <label className="block text-sm text-indigo-200 mb-2 font-medium">Name</label>
          <div className="relative">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-xl placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
          {errors.name && <p className="text-blue-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm text-indigo-200 mb-2 font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-xl placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
          {errors.email && <p className="text-blue-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm text-indigo-200 mb-2 font-medium">Password</label>
          <div className="relative">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/30 rounded-xl placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
          {errors.password && <p className="text-blue-400 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Register
          </span>
        </button>
      </form>

      {/* Redirect to Login */}
      <p className="text-center text-sm mt-4 text-indigo-200 relative z-10">
        Already have an account?
        <button
          type="button"
          onClick={() => {
            onRequestClose();  // close register modal
            openLogin();       // open login modal
          }}
          className="ml-1 underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Login
        </button>
      </p>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
    </Modal>
  );
};

export default SignUp;