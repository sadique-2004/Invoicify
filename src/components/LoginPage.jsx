import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../assets/invoice.png';
import google from '../assets/google.jpg';
import TryLogin from './TryLogin';


function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle login/signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'FREE' && password === '0000') {
      navigate('/invoice');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign In functionality coming soon!');
  };
  const handleSignup = () => {
    alert("Sign Up functionality not implemented yet.");
  };

  return (

      <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full bg-[#EEEFEE] px-4 md:px-16 lg:px-40 py-2">
        {/* Image Section */}
        <div
          className="flex-1 h-64 md:h-full w-full md:w-[70%] bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImg})` }}
        ></div>

        {/* Login Form Section */}
        <div className="flex-1 bg-white p-6 md:p-8 rounded md:shadow-lg w-full md:w-[30%] max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#DD8788]">Login</h1>

          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#45ccb8] text-white py-2 rounded hover:bg-[#2E7C75]  mb-4"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100"
          >
            <img
              src={google}
              alt="Google Logo"
              className="w-8 h-8 mr-2"
            />
            <span>Login In with Google</span>
          </button>

          <a href="#" className='text-blue-700 items-center w-full'>Signup</a>
        </div>
        {/* <TryLogin/> */}
      </div>

  );
}

export default LoginPage;