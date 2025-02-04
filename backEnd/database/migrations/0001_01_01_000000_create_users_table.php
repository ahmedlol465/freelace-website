import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define TypeScript interfaces for data types
interface UserDataDetails {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  Region?: string; // Correct casing to match database
  Phone_number?: string; // Correct casing to match database
  Gender?: string; // Correct casing to match database
}

interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  email: string;
  userName?: string;
  role?: string;
  accountType?: string;
  isEmailVerified?: number;
  created_at?: string;
  updated_at?: string;
  profilePhoto?: string | null;
  Region?: string | null; // Correct casing to match database and nullable
  Phone_number?: string | null; // Correct casing to match database and nullable
  Gender?: string | null; // Correct casing to match database and nullable
}

interface GetUserResponse {
  message?: string;
  user: User;
}

interface ProfileUpdateResponse {
  message: string;
  user: User;
}

interface ErrorResponse {
  message: string;
}

interface ProfileTabContentProps {
  userData: User | null;
  onUpdateProfile: (data: UserDataDetails) => Promise<void>;
}

const ProfileTabContent: React.FC<ProfileTabContentProps> = ({ userData, onUpdateProfile }) => {
  const [formData, setFormData] = useState<UserDataDetails>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    Region: '', // Correct casing
    Phone_number: '', // Correct casing
    Gender: '', // Correct casing
  });
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isActivating, setIsActivating] = useState(false); // Loading state for activate button

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        userName: userData.userName || '',
        email: userData.email || '',
        Region: userData.Region || '', // Correct casing
        Phone_number: userData.Phone_number || '', // Correct casing
        Gender: userData.Gender || '', // Correct casing
      });
    }
  }, [userData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, Gender: gender }); // Correct casing
  };

  const handleActivate = async () => {
    setIsActivating(true);
    // In a real application, you would trigger an SMS sending process here.
    // and handle API call to send activation code
    setTimeout(() => {
      setIsActivating(false);
      setShowCodeInput(true);
      toast.info('Activation code sent! Please check your phone.');
    }, 1000); // Simulate API call delay
  };

  const handleSendCode = async () => {
    // In a real application, you would verify the code and update phone number status
    toast.success('Phone number activated successfully!');
    setShowCodeInput(false);
  };

  const handleBackToPhoneInput = () => {
    setShowCodeInput(false);
  };

  return (
    <div className="p-6">
      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0 .75.75 0 01-.011.02l-.002.002a.75.75 0 01-.716.696H6.095a.75.75 0 01-.75-.75v-.002c0-.013.018-.025.031-.036l.002-.002z" />
            </svg>
          </div>
          <button
            className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs py-1 px-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={true} // Feature not implemented yet
          >
            Change photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User name</label>
        <input type="text" id="userName" value={formData.userName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" value={formData.email} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm" />
      </div>


      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="mt-2 flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio h-4 w-4 text-orange-600" name="Gender" value="Male" checked={formData.Gender === 'Male'} onChange={() => handleGenderChange('Male')} />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio h-4 w-4 text-orange-600" name="Gender" value="Female" checked={formData.Gender === 'Female'} onChange={() => handleGenderChange('Female')} />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="Region" className="block text-sm font-medium text-gray-700">Region</label>
          <select id="Region" value={formData.Region} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
            <option value="">Select Region</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="egypt">Egypt</option>
            <option value="united-arab-emirates">United Arab Emirates</option>
            <option value="yemen">Yemen</option>
            <option value="qatar">Qatar</option>
            <option value="algeria">Algeria</option>
            <option value="morocco">Morocco</option>
            <option value="palestine">Palestine</option>
            {/* Add more regions as needed */}
          </select>
        </div>
      </div>


      <div className="mb-4">
        <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">Phone number</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            <select className="bg-transparent border-none focus:ring-0 text-gray-700" disabled> {/* Country code selection disabled for now */}
              <option value="+966">+966</option>
              <option value="+20">+20</option>
              <option value="+971">+971</option>
              {/* Add more country codes */}
            </select>
          </span>
          <input
            type="tel"
            id="Phone_number"
            value={formData.Phone_number}
            onChange={handleInputChange}
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            placeholder="Enter phone number"
            readOnly={showCodeInput} // Readonly when code input is shown
          />
          {!showCodeInput && (
            <button
              onClick={handleActivate}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              disabled={isActivating || showCodeInput}
            >
              {isActivating ? 'Activating...' : 'Activate'}
            </button>
          )}
        </div>
      </div>

      {showCodeInput && (
        <div className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="text-sm text-gray-700 mb-2">
            To activate your mobile number, send the activation code via SMS to the mobile number that appears to you
          </p>
          <ol className="list-decimal pl-5 text-sm text-gray-700 mb-4">
            <li>Open your phone and create a new text message</li>
            <li>Enter the mobile number that appears in the recipient field</li>
            <li>Write the activation code in the text of the message and then send it</li>
            <li>After sending the message, click the “I have sent the activation code” button.</li>
            <li>Make sure you have enough credit and that your mobile phone supports international messages</li>
          </ol>
          <p className="text-sm text-gray-700 mb-2">Enter the code sent to you</p>
          <div className="flex gap-2 mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
              />
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={handleBackToPhoneInput} className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Back
            </button>
            <button onClick={handleSendCode} className="px-4 py-2 text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PasswordTabContent = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.id]: e.target.value });
  };

  const handleUpdatePassword = async () => {
    // Implement password update logic here
    toast.success('Password updated successfully! (Simulated)');
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old password</label>
        <input type="password" id="oldPassword" value={passwordData.oldPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
        <input type="password" id="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm new password</label>
        <input type="password" id="confirmNewPassword" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" />
      </div>
    </div>
  );
};

const EditAccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false); // Loading state for update button

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<GetUserResponse>('http://127.0.0.1:8000/api/GetUser', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Add token if needed
        });
        setUserData(response.data.user);
      } catch (e: any) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          setError(new Error(axiosError.response?.data?.message || axiosError.message));
          toast.error(`Failed to load user data: ${axiosError.message}`);
        } else {
          setError(new Error('An unexpected error occurred'));
          toast.error('Failed to load user data: An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async (data: UserDataDetails) => {
    setIsUpdating(true);
    setError(null);
    try {
      const response = await axios.put<ProfileUpdateResponse>('http://127.0.0.1:8000/api/profileUpdate', data, { // Or axios.post depending on your API
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Add token if needed
      });
      setUserData(response.data.user);
      toast.success('Profile updated successfully!');
    } catch (e: any) {
      setIsUpdating(false);
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<ErrorResponse>;
        setError(new Error(axiosError.response?.data?.message || axiosError.message));
        toast.error(`Failed to update profile: ${axiosError.response?.data?.message || axiosError.message}`);
      } else {
        setError(new Error('An unexpected error occurred'));
        toast.error('Failed to update profile: An unexpected error occurred');
      }
    } finally {
      setIsUpdating(false);
    }
  };


  const handleUpdate = async () => {
    if (activeTab === 'profile' && userData) {
      await handleUpdateProfile({
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        Region: formData.Region, // Correct casing
        Phone_number: formData.Phone_number, // Correct casing
        Gender: formData.Gender, // Correct casing
      });
    } else if (activeTab === 'password') {
      // Handle password update if needed in the future
      toast.info('Password update functionality not yet implemented.');
    }
  };


  if (loading) {
    return <div>Loading account settings...</div>;
  }

  if (error) {
    return (
      <div>
        Error loading settings: {error.message}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }


  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 text-sm font-medium ${activeTab === 'profile' ? 'bg-white border-b-2 border-orange-500 text-orange-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block align-middle mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0 .75.75 0 01-.011.02l-.002.002a.75.75 0 01-.716.696H6.095a.75.75 0 01-.75-.75v-.002c0-.013.018-.025.031-.036l.002-.002z" />
              </svg>
              Profile
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`py-4 px-6 text-sm font-medium ${activeTab === 'password' ? 'bg-white border-b-2 border-orange-500 text-orange-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block align-middle mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a3 3 0 00-3-3H6.75a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5m-3 0h3m-3 0H6.75m0 0V6.75" />
              </svg>
              Password
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'profile' && <ProfileTabContent userData={userData} onUpdateProfile={handleUpdateProfile} />}
          {activeTab === 'password' && <PasswordTabContent />}
        </div>

        {/* Update Button */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className={`w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50`}
          >
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccountPage;
