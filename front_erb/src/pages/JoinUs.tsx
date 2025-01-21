import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import joinUs from '../assets/joinUs.png';
import { useNavigate } from 'react-router-dom';


// Define the form data type
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const JoinUsPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Save the basic user info to localStorage or context
      localStorage.setItem('basicUserInfo', JSON.stringify(data));

      // Redirect to the AccountData component
      navigate('/accountSetup');
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
      if (axiosError.response) {
        if (axiosError.response.data.errors) {
          Object.entries(axiosError.response.data.errors).forEach(([field, messages]) => {
            setError(field as keyof FormData, {
              type: 'server',
              message: messages.join(', '),
            });
          });
        } else {
          setServerError(axiosError.response.data.message);
        }
      } else {
        setServerError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-gray-800">
        Join Us
      </h2>

      <div className="container mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex md:space-x-8">
        {/* Left Section */}
        <div className="md:w-1/2 px-8 py-8 md:py-16">
          {/* Social Media Sign-In Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <button className="flex items-center justify-center bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-600 transition-colors duration-300">
              <FcGoogle className="mr-2 text-xl" />
              Join by Google
            </button>
            <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
              <FaLinkedin className="mr-2 text-xl" />
              Join by Linkedin
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500 font-semibold">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 border ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <HiOutlineMail className="h-5 w-5 text-gray-400" />
                </span>
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  {...register('password', { required: 'Password is required' })}
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Next
            </button>

            {/* Display server errors */}
            {serverError && (
              <p className="text-red-500 text-sm mt-2 text-center">{serverError}</p>
            )}
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={joinUs}
            alt="Join Us illustration"
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;