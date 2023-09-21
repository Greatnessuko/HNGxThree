import React, { useState } from "react";
import { auth } from "../auth"; // Imported the firebase.js file you created in your src folder
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import React Toastify components and functions
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React Toastify

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setButtonLoader(false);
        toast.success("acess granted", {
          autoClose: 2000,
          onClose: () => {
            navigate("/gallery");
          },
        });
      })
      .catch(() => {
        setPassword("");
        setButtonLoader(false);
        toast.error("incorrect email or password", {
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
    <div className="bg-white p-8 rounded shadow-md md:w-96 w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Hello! Welcome to Galleria</h2>
      <ToastContainer /> {/* Add the ToastContainer component */}
      <p className="text-2xl font-semibold">Login here</p>
      <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Email
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Password
            </label>
            <input
              name="password"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="btn-container mt-4">
            {buttonLoader ? (
              <div className="spinner"></div>
            ) : (
              <button
                className="block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-green-700 focus-visible:ring active:bg-green-600 md:text-base"
                type="submit"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Form;
