import React, { useState } from 'react';
import AccountData from '../components/AccountData';

interface Step {
  label: string;
  content: React.ReactNode;
}

const stepsConfig: Step[] = [
  // {
  //   // label: 'Account data',
  //   // content: (
  //   // //   <div className="p-6">
  //   // //     <h2 className="text-xl font-semibold mb-4">Hello sunny</h2>
  //   // //     <div className="mb-6">
  //   // //       <label htmlFor="username" className="block text-sm font-semibold text-gray-700">User name</label>
  //   // //       <input
  //   // //         type="text"
  //   // //         id="username"
  //   // //         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
  //   // //         placeholder="Enter your username"
  //   // //       />
  //   // //     </div>
  //   // //     <div className="mb-6">
  //   // //       <label className="block text-sm font-semibold text-gray-700">Account type</label>
  //   // //       <div className="mt-2 space-y-2">
  //   // //         <div className="flex items-center">
  //   // //           <input
  //   // //             id="freelancer"
  //   // //             name="accountType"
  //   // //             type="radio"
  //   // //             value="freelancer"
  //   // //             className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
  //   // //           />
  //   // //           <label htmlFor="freelancer" className="ml-3 block text-sm font-medium text-gray-700">
  //   // //             Freelancer
  //   // //             <span className="block text-xs text-gray-500">(Services seller / Project Implementer)</span>
  //   // //           </label>
  //   // //         </div>
  //   // //         <div className="flex items-center">
  //   // //           <input
  //   // //             id="projectOwner"
  //   // //             name="accountType"
  //   // //             type="radio"
  //   // //             value="projectOwner"
  //   // //             className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
  //   // //           />
  //   // //           <label htmlFor="projectOwner" className="ml-3 block text-sm font-medium text-gray-700">
  //   // //             Project owner
  //   // //             <span className="block text-xs text-gray-500">(Project owner / Services buyer)</span>
  //   // //           </label>
  //   // //         </div>
  //   // //         <div className="flex items-center">
  //   // //           <input
  //   // //             id="company"
  //   // //             name="accountType"
  //   // //             type="radio"
  //   // //             value="company"
  //   // //             className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
  //   // //           />
  //   // //           <label htmlFor="company" className="ml-3 block text-sm font-medium text-gray-700">
  //   // //             Company
  //   // //             <span className="block text-xs text-gray-500">(Remote Hiring of Freelancers)</span>
  //   // //           </label>
  //   // //         </div>
  //   // //       </div>
  //   // //     </div>
  //   // //     <div className="flex items-start mb-6">
  //   // //       <div className="flex items-center h-5">
  //   // //         <input
  //   // //           id="terms"
  //   // //           type="checkbox"
  //   // //           className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
  //   // //         />
  //   // //       </div>
  //   // //       <div className="ml-3 text-sm">
  //   // //         <label htmlFor="terms" className="font-medium text-gray-700">
  //   // //           I have read and agree to <a href="#" className="text-blue-500 hover:underline">terms of use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Statement</a>.
  //   // //         </label>
  //   // //       </div>
  //   // //     </div>
  //   // //   </div>
  //   // // <AccountData/>
  //   // ),
  // },
  {
    label: 'Profile',
    content: (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="mb-6">
          <label htmlFor="specialization" className="block text-sm font-semibold text-gray-700">Specialization</label>
          <select
            id="specialization"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g., Frontend Developer"
          />
        </div>
      </div>
    ),
  },
  {
    label: 'Business gallery',
    content: (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Business Gallery</h2>
        <p className="text-gray-700 mb-4">Upload images and details about your business.</p>
      </div>
    ),
  },
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < stepsConfig.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateProgress = () => {
    return ((currentStep + 1) / stepsConfig.length) * 100;
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-md shadow-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Hello sunny</h2>
          <div className="relative mt-4">
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
              {stepsConfig.map((step, index) => (
                <span key={index}>{step.label}</span>
              ))}
            </div>
            <div className="flex relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0"></div>
              <div
                className="absolute top-1/2 left-0 h-1 bg-blue-500 transform -translate-y-1/2 z-10 transition-width duration-300 ease-in-out"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
              <div className="relative flex justify-between w-full">
                {stepsConfig.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{ left: `${(index / (stepsConfig.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    <div
                      className={`
                        relative z-20 w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${index <= currentStep ? 'bg-white border-blue-500 text-blue-500' : 'bg-gray-300 border-gray-300 text-gray-600'}
                        ${index < currentStep ? 'bg-blue-500 border-blue-500 text-white' : ''}
                        transition-colors duration-200
                      `}
                    >
                      {index < currentStep ? <span className="text-xs">✓</span> : index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {stepsConfig[currentStep].content}

        <div className="flex justify-end">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Previous
            </button>
          )}
          {currentStep < stepsConfig.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;