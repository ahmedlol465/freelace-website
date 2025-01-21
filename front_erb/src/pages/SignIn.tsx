import { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import pro from '../assets/bro.png';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      navigate('/Dashboard'); 

      console.log('Login successful:', response.data);
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message);
        console.error('Login failed:', err.response.data);
      } else if (err.request) {
        console.error('Login failed: No response received', err.request);
        setError('No response received from the server.');
      } else {
        console.error('Login failed:', err.message);
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Sign in</h2>

      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        <div className="w-full md:w-1/2 py-10 px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <button className="flex items-center justify-center bg-red-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-600 transition-all duration-200 shadow-md">
              <FcGoogle className="mr-2 text-2xl" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md">
                <FaLinkedin className="mr-2 text-2xl" />
                Sign in with LinkedIn
              </button>
             </div>

          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500 font-medium">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div> {/*Email Input*/}
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <div className="relative">
                    <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}   //Added Value and onChange
                    onChange={(e) => setEmail(e.target.value)} //Added
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center">
                    <HiOutlineMail className="h-6 w-6 text-gray-400" />
                  </span>
                </div>
              </div>
                 <div> {/*Password Input*/}
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                        value={password} //Added Value and onChange
                        onChange={(e) =>setPassword(e.target.value)}//Added
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center">
                    <HiOutlineLockClosed className="h-6 w-6 text-gray-400" />
                    </span>
                  </div>
                 </div>
            {error && <div className="text-red-500">{error}</div>} {/* Error Message */}
            <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-lg">
              Sign in
            </button>
          </form>

          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2">Need help?</p>
            <ul className="text-sm text-gray-600 space-y-1">
            <li> <button className="text-left text-blue-500 hover:underline focus:outline-none">I don't have an account yet</button> </li>
            <li> <button className="text-left text-blue-500 hover:underline focus:outline-none">Forgot my password</button> </li>
              <li> <button className="text-left text-blue-500 hover:underline focus:outline-none">I did not receive the activation code</button> </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img src={pro} alt="Sign in illustration" className="h-4/5 w-4/5 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;