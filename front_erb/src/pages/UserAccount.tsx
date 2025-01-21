import React, { useState } from 'react';

// Sample data for projects and services (replace with actual data fetching)
const projectsData = [
  {
    title: 'Ready-made database for food items',
    author: 'Ahmed M.',
    time: 'From 14 hours',
    offers: 5,
    description:
      'We need an Excel file that contains a database of all types, products, and names of suppliers of foodstuffs in the Yemeni market. It contains two columns: ...',
    price: '500$ - 1000$',
  },
  {
    title: 'Ready-made database for food items',
    author: 'Ahmed M.',
    time: 'From 14 hours',
    offers: 5,
    description:
      'We need an Excel file that contains a database of all types, products, and names of suppliers of foodstuffs in the Yemeni market. It contains two columns: ...',
    price: '500$ - 1000$',
  },
];

const servicesData = [
  {
    image: '/design_magazine.png',
    title: 'Design magazine',
    views: 24,
    likes: 12,
    price: '20$',
    rating: 4.5,
  },
  {
    image: '/design_magazine.png',
    title: 'Design magazine',
    views: 24,
    likes: 12,
    price: '20$',
    rating: 4.5,
  },
  {
    image: '/design_magazine.png',
    title: 'Design magazine',
    views: 24,
    likes: 12,
    price: '20$',
    rating: 4.5,
  },
  {
    image: '/design_magazine.png',
    title: 'Design magazine',
    views: 24,
    likes: 12,
    price: '20$',
    rating: 4.5,
  },
];

const ProfileContent = () => (
  <div className="mt-6 space-y-4">
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Statistics</h2>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Ratings</span>
        <div className="flex items-center space-x-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
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
          <span className="ml-1">4.5</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Project completion rate</span>
        <span className="font-semibold">4.5</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Reemployment rate</span>
        <span className="font-semibold">4.5</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>On time delivery rate</span>
        <span className="font-semibold">4.5</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Average speed of response</span>
        <span>2 hours & 2 min</span>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Registration data</h2>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Registration date</span>
        <span>22/8/2024</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 py-1">
        <span>Last seen</span>
        <span>From 2 days</span>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Documentations</h2>
      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Email</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Phone number</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Personal identity</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Payment method</span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsContent = () => (
  <div className="mt-6 space-y-4">
    {projectsData.map((project, index) => (
      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
        <h3 className="font-semibold text-gray-800 text-sm">{project.title}</h3>
        <div className="flex items-center text-gray-600 text-xs mt-2">
          <div className="flex items-center mr-4">
            <img src="/avatar.png" alt={project.author} className="w-4 h-4 rounded-full mr-1" />
            <span>{project.author}</span>
          </div>
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3h-6a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2v-8a2 2 0 00-2-2z"
              />
            </svg>
            <span>{project.time}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span>{project.offers} Offers</span>
          </div>
        </div>
        <p className="text-gray-700 text-xs mt-2">{project.description}</p>
        <div className="mt-4 font-semibold text-sm text-gray-800">{project.price}</div>
      </div>
    ))}
  </div>
);

const ServicesContent = () => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {servicesData.map((service, index) => (
      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
        <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-2" />
        <h3 className="font-semibold text-gray-800 text-sm">{service.title}</h3>
        <div className="flex items-center text-gray-600 text-xs mt-1">
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{service.views}</span>
          </div>
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{service.likes}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-xs mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-3 w-3 ${star <= service.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
          <span className="ml-1">{service.rating}</span>
        </div>
        <div className="mt-2 font-semibold text-sm text-gray-800">{service.price}</div>
      </div>
    ))}
  </div>
);

const BusinessGalleryContent = () => (
  <div className="mt-6 grid grid-cols-2 gap-4">
    {[1, 2, 3, 4].map((index) => (
      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
        <img src="/design_magazine.png" alt={`Gallery Image ${index}`} className="w-full h-32 object-cover rounded-md" />
      </div>
    ))}
  </div>
);

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex justify-center pt-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-7xl mb-10 transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">User account</h1>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Section */}
          <div className="space-y-6">
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
                  <h2 className="text-lg font-semibold text-gray-700">My account</h2>
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
                  <span>Freelancer, level <span className="font-semibold">New</span></span>
                </div>
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span>Saudi arabia</span>
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
                        star <= 4 ? 'text-yellow-400' : 'text-gray-300'
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
            {/* About me */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">About me</h2>
              <p className="text-sm text-gray-600">
                I am Sammy and I am working as a web developer for 5 years.
              </p>
            </div>
            {/* My skills */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">My skills</h2>
              <div className="grid grid-cols-3 gap-2">
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
                  <span>Photoshop</span>
                </span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
                  <span>Photoshop</span>
                </span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
                  <span>Photoshop</span>
                </span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
                  <span>Photoshop</span>
                </span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
                  <span>Photoshop</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={`px-4 py-2 font-semibold text-sm ${
                  activeTab === 'Profile' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'
                }`}
                onClick={() => handleTabClick('Profile')}
              >
                Profile
              </button>
              <button
                className={`px-4 py-2 font-semibold text-sm ${
                  activeTab === 'Projects' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'
                }`}
                onClick={() => handleTabClick('Projects')}
              >
                Projects
              </button>
              <button
                className={`px-4 py-2 font-semibold text-sm ${
                  activeTab === 'Services' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'
                }`}
                onClick={() => handleTabClick('Services')}
              >
                Services
              </button>
              <button
                className={`px-4 py-2 font-semibold text-sm ${
                  activeTab === 'BusinessGallery' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'
                }`}
                onClick={() => handleTabClick('BusinessGallery')}
              >
                Business gallery
              </button>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'Profile' && <ProfileContent />}
            {activeTab === 'Projects' && <ProjectsContent />}
            {activeTab === 'Services' && <ServicesContent />}
            {activeTab === 'BusinessGallery' && <BusinessGalleryContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;