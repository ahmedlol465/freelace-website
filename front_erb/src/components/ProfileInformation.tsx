import React, { useState } from 'react';
import ProfileInformation from '../components/ProfileInformation';

const AccountSetup = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  const nextStep = () => {
    if (step === 1) {
      let isValid = true;
      if (!username.trim()) {
        setUsernameError('Username is required');
        isValid = false;
      } else {
        setUsernameError('');
      }
      if (!termsAgreed) {
        // alert('Please agree to the terms and conditions.');
        isValid = false;
      }
      if (isValid) setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <StepOne
              username={username}
              setUsername={setUsername}
              accountType={accountType}
              setAccountType={setAccountType}
              termsAgreed={termsAgreed}
              setTermsAgreed={setTermsAgreed}
              usernameError={usernameError}
            />
          </div>
        );
      case 2:
        return <ProfileInformation />;
      case 3:
        return <div>Business Gallery</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-8">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Hello, Samy</h2>
        <ProgressBar step={step} />
        <div>{renderStepContent()}</div>
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const StepOne = ({
  username,
  setUsername,
  accountType,
  setAccountType,
  termsAgreed,
  setTermsAgreed,
  usernameError,
}: any) => {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full mt-2 p-2 border rounded-md ${
            usernameError ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Account Type</label>
        <div className="mt-2 flex flex-col space-y-2">
          {['Freelancer', 'Project Owner', 'Company'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="radio"
                value={type}
                checked={accountType === type}
                onChange={() => setAccountType(type)}
                className="h-4 w-4"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
          />
          <span>I agree to the Terms and Conditions</span>
        </label>
      </div>
    </div>
  );
};

const ProgressBar = ({ step }: any) => {
  return (
    <div className="relative flex justify-between items-center mb-6">
      {['Account Data', 'Profile', 'Gallery'].map((label, index) => (
        <div key={label} className="flex-1 text-center">
          <div
            className={`h-2 rounded-full ${
              step > index ? 'bg-green-500' : 'bg-gray-300'
            }`}
          ></div>
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default AccountSetup;
