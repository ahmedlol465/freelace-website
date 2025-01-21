import React from "react";

const ControlPanel = () => {
  return (
    <>

    <div className="flex justify-center pt-10 bg-[#F8F9FA]">

      <h1 className=" text-3xl font-bold mb-8 text-gray-800 ">Control Panel</h1>
    </div>

      <div className="p-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen gap-32 flex justify-center items-start py-10">
        <div className="w-[500px] ">
          {/* My Account */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-700">
                  My Account
                </h2>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.535 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center mb-4">
              <div className="rounded-full bg-blue-50 w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-3 font-semibold text-gray-800">Sammy Mohamed</p>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l7.89 5.26a2 2 0 002.22 0L21 8"
                  />
                </svg>
                <span>
                  Freelancer, Level <span className="font-semibold">New</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 text-center mt-1">
                Programming, website and application development
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700">Rate:</p>
              <div className="flex items-center space-x-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      star <= 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.172 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.296-1.584-.537-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-sm text-gray-700 ml-1">4.5</span>
              </div>
            </div>
          </div>

          {/* Steps to complete the account */}
          <div className="bg-white my-10 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Steps to Complete the Account
            </h2>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-700">
                Add your first project
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center" />
              <span className="text-sm text-gray-700">
                Confirm mobile number
              </span>
            </div>
          </div>

          {/* Work link for Companies */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14-10H3m14 0h-5v5m5 0v-5z"
                />
              </svg>
              <h2 className="text-lg font-semibold text-gray-700">
                Work Link for Companies
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A solution tailored for companies and organizations that helps
              them grow their business by simplifying the process of hiring
              freelancers through a system that allows colleagues to add company
              members (with members of anyone else) to assist in marketing or
              sales and communicate with freelancers according to specific
              permissions.
            </p>
            <button className="bg-transparent hover:bg-gray-100 text-purple-500 border border-purple-500 hover:border-transparent rounded-lg px-4 py-2 text-sm focus:outline-none transition-colors duration-300">
              Know more
            </button>
          </div>
        </div>
        <div className=" rounded-xl shadow-lg p-8 w-full max-w-4xl transform transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* My Balance */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2m-5 8v-4m0 0H9m0 0L9 18m0-4l3 3m-3-3l-3-3"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-700">
                  My Balance
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold text-green-600">0.00 $</p>
                  <p className="text-sm text-gray-600">Total balance</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">0.00 $</p>
                  <p className="text-sm text-gray-600">Available balance</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Withdrawable balance{" "}
                    <span className="font-semibold">0.00 $</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Pending balance{" "}
                    <span className="font-semibold">0.00 $</span>
                  </p>
                </div>
              </div>
            </div>

            {/* My Projects */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-700">
                    My Projects <span className="text-gray-500">(0)</span>
                  </h2>
                </div>
                <button className="bg-orange-500 text-white text-sm rounded-lg px-3 py-1.5 hover:bg-orange-600 focus:outline-none transition-colors duration-300">
                  Add project
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Draft", percentage: 10, color: "bg-orange-500" },
                  {
                    label: "Under review",
                    percentage: 0,
                    color: "bg-orange-500",
                  },
                  { label: "Opened", percentage: 5, color: "bg-orange-500" },
                  {
                    label: "In progress",
                    percentage: 0,
                    color: "bg-orange-500",
                  },
                  { label: "Completed", percentage: 15, color: "bg-green-500" },
                  { label: "Closed", percentage: 0, color: "bg-green-500" },
                  { label: "Canceled", percentage: 5, color: "bg-red-500" },
                  { label: "Rejected", percentage: 0, color: "bg-red-500" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2.5 mb-3">
                      <div
                        className={`${item.color} h-2.5 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
            {/* My services */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-700">
                    My Services <span className="text-gray-500">(0)</span>
                  </h2>
                </div>
                <button className="bg-blue-500 text-white text-sm rounded-lg px-3 py-1.5 hover:bg-blue-600 focus:outline-none transition-colors duration-300">
                  Add
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Sent", percentage: 60, color: "bg-blue-500" },
                  { label: "Opened", percentage: 0, color: "bg-blue-500" },
                  { label: "Completed", percentage: 0, color: "bg-green-500" },
                  { label: "Canceled", percentage: 0, color: "bg-red-500" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2.5 mb-3">
                      <div
                        className={`${item.color} h-2.5 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My purchase */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-700">
                    My Purchase <span className="text-gray-500">(0)</span>
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    label: "Awaiting seller approval",
                    percentage: 14,
                    color: "bg-yellow-500",
                  },
                  { label: "In progress", percentage: 0, color: "bg-blue-500" },
                  { label: "Completed", percentage: 0, color: "bg-green-500" },
                  { label: "Canceled", percentage: 0, color: "bg-red-500" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2.5 mb-3">
                      <div
                        className={`${item.color} h-2.5 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
