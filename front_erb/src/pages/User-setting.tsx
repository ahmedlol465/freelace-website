// import React, { useState } from 'react';

// const PersonalProfileContent = () => (
//   <div className="space-y-4 mt-6">
//     {/* Account type */}
//     <div>
//       <h3 className="text-lg font-semibold text-gray-700 mb-2">Account type</h3>
//       <div className="space-y-2">
//         <label className="inline-flex items-center">
//           <input type="radio" className="form-radio h-5 w-5 text-orange-600" name="accountType" value="projectOwner" defaultChecked />
//           <span className="ml-2 text-gray-700">Project owner</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input type="radio" className="form-radio h-5 w-5 text-orange-600" name="accountType" value="freelancer" />
//           <span className="ml-2 text-gray-700">Freelancer</span>
//         </label>
//       </div>
//     </div>
//     {/* Specialization and Job title */}
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
//         <select id="specialization" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
//           <option>Web Development</option>
//           <option>Design</option>
//           <option>Marketing</option>
//           {/* Add more options */}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job title</label>
//         <input type="text" name="jobTitle" id="jobTitle" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
//       </div>
//     </div>
//     {/* Biography */}
//     <div>
//       <label htmlFor="biography" className="block text-sm font-medium text-gray-700">Biography</label>
//       <textarea
//         id="biography"
//         rows={4}
//         className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
//         defaultValue={"Hello, I'm Omar Maher, a passionate UI/UX designer with a strong focus on creating intuitive and engaging digital experiences. With a background in both design and development, I specialize in crafting user-centered solutions that seamlessly blend form and function.\n\nMy journey in the design world has been driven by a commitment to understanding user needs and translating them into visually compelling and highly usable interfaces. From wireframes and prototypes to final designs, I thrive on the challenge of solving complex problems and delivering results that not only meet but exceed client expectations.\n\nI bring a collaborative approach to every project, working closely with clients and stakeholders to ensure their vision is realized and that goals are achieved. Whether you’re looking to revamp an existing product or develop a new one from scratch, I’m here to help you navigate the design process and create impactful user experiences."}
//       />
//     </div>
//     {/* Skills */}
//     <div>
//       <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
//       <div className="flex flex-wrap gap-2">
//         <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//           <span>Photoshop</span>
//           <button type="button" className="text-red-500 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//           <span>Photoshop</span>
//           <button type="button" className="text-red-500 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//           <span>Photoshop</span>
//           <button type="button" className="text-red-500 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//           <span>Photoshop</span>
//           <button type="button" className="text-red-500 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//           <span>Photoshop</span>
//           <button type="button" className="text-red-500 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </span>
//       </div>
//     </div>
//   </div>
// );

// const PrivacyContent = () => (
//   <div className="mt-6 space-y-4">
//     {/* Project owner */}
//     <div>
//       <h3 className="text-lg font-semibold text-gray-700 mb-2">Project owner</h3>
//       <div className="space-y-2">
//         <label className="inline-flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" />
//           <span className="ml-2 text-gray-700">Hide profile picture</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" />
//           <span className="ml-2 text-gray-700">Hide profile</span>
//         </label>
//       </div>
//     </div>
//   </div>
// );

// const MoreContent = () => (
//   <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//     {/* Credit card */}
//     <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" />
//       </svg>
//       <p className="text-sm text-gray-700">Credit card</p>
//     </div>
//     {/* Email */}
//     <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l7.89 5.26a2 2 0 002.22 0L21 8" />
//       </svg>
//       <p className="text-sm text-gray-700">Email</p>
//     </div>
//     {/* Bank accounts */}
//     <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m-9-9a9 9 0 019-9m-3 9h17m-17 0a2 2 0 00-2 2v2a2 2 0 002 2h17m-17 0a2 2 0 012-2v-2a2 2 0 01-2-2h17m-17 0a2 2 0 002 2v2a2 2 0 002 2h9" />
//       </svg>
//       <p className="text-sm text-gray-700">Bank accounts</p>
//     </div>
//     {/* Identity verification */}
//     <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h3m-3 3h3m-3-6h3" />
//       </svg>
//       <p className="text-sm text-gray-700">Identity verification</p>
//     </div>
//   </div>
// );

// const SettingPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('Personal profile');

//   const handleTabClick = (tabName: any) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-6">Setting</h1>
//         <div className="flex">
//           {/* Sidebar Navigation */}
//           <aside className="w-64 border-r pr-8">
//             <nav className="space-y-4">
//               <button
//                 onClick={() => handleTabClick('Personal profile')}
//                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
//                   activeTab === 'Personal profile' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                 }`}
//               >
//                 Personal profile
//               </button>
//               <button
//                 onClick={() => handleTabClick('Privacy')}
//                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
//                   activeTab === 'Privacy' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                 }`}
//               >
//                 Privacy
//               </button>
//               <button
//                 onClick={() => handleTabClick('More')}
//                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
//                   activeTab === 'More' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                 }`}
//               >
//                 More
//               </button>
//             </nav>
//           </aside>

//           {/* Main Content Area */}
//           <main className="flex-1 pl-8">
//             {activeTab === 'Personal profile' && <PersonalProfileContent />}
//             {activeTab === 'Privacy' && <PrivacyContent />}
//             {activeTab === 'More' && <MoreContent />}
//           </main>
//         </div>
//         {/* Save Button */}
//         <div className="mt-8 flex justify-end">
//           <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Interfaces for API response and data
// interface ProfileData {
//     id: number;
//     user_id: number;
//     firstName: string;
//     lastName: string;
//     userName: string;
//     accountType: string;
//     userData: {
//         specialist: string | null;
//         jobTitle: string | null;
//         description: string | null;
//         skillsOfWork: string[] | null;
//     } | null;
// }

// interface ProfileResponse {
//     data: ProfileData;
//     meta: {
//         api_version: string;
//     };
// }

// interface ProfileContentProps {
//     profileData: ProfileData | null;
//     loading: boolean;
//     error: string | null;
//     onSave: (data: ProfileData) => void;
// }

// const PersonalProfileContent: React.FC<ProfileContentProps> = ({ profileData, loading, error, onSave }) => {
//     const [specialization, setSpecialization] = useState(profileData?.userData?.specialist || "");
//     const [jobTitle, setJobTitle] = useState(profileData?.userData?.jobTitle || "");
//     const [biography, setBiography] = useState(profileData?.userData?.description || "");
//     const [skills, setSkills] = useState(profileData?.userData?.skillsOfWork || []);
//     const [accountType, setAccountType] = useState(profileData?.accountType || "projectOwner");

//     const handleSave = () => {
//         if (profileData) {
//             const updatedData = {
//                 ...profileData,
//                 accountType,
//                 userData: {
//                     ...profileData.userData,
//                     specialist: specialization,
//                     jobTitle,
//                     description: biography,
//                     skillsOfWork: skills,
//                 },
//             };
//             onSave(updatedData);
//         }
//     };

//     if (loading) {
//         return <div>Loading Profile Data...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error loading profile data: {error}</div>;
//     }

//     return (
//         <div className="space-y-4 mt-6">
//             {/* Account type */}
//             <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Account type</h3>
//                 <div className="space-y-2">
//                     <label className="inline-flex items-center">
//                         <input
//                             type="radio"
//                             className="form-radio h-5 w-5 text-orange-600"
//                             name="accountType"
//                             value="projectOwner"
//                             checked={accountType === 'projectOwner'}
//                             onChange={() => setAccountType('projectOwner')}
//                         />
//                         <span className="ml-2 text-gray-700">Project owner</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                         <input
//                             type="radio"
//                             className="form-radio h-5 w-5 text-orange-600"
//                             name="accountType"
//                             value="freelancer"
//                             checked={accountType === 'freelancer'}
//                             onChange={() => setAccountType('freelancer')}
//                         />
//                         <span className="ml-2 text-gray-700">Freelancer</span>
//                     </label>
//                 </div>
//             </div>
//             {/* Specialization and Job title */}
//             <div className="grid grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
//                     <select
//                         id="specialization"
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//                         value={specialization}
//                         onChange={(e) => setSpecialization(e.target.value)}
//                     >
//                         <option>Web Development</option>
//                         <option>Design</option>
//                         <option>Marketing</option>
//                         {/* Add more options */}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job title</label>
//                     <input
//                         type="text"
//                         name="jobTitle"
//                         id="jobTitle"
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//                         value={jobTitle}
//                         onChange={(e) => setJobTitle(e.target.value)}
//                     />
//                 </div>
//             </div>
//             {/* Biography */}
//             <div>
//                 <label htmlFor="biography" className="block text-sm font-medium text-gray-700">Biography</label>
//                 <textarea
//                     id="biography"
//                     rows={4}
//                     className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={biography}
//                     onChange={(e) => setBiography(e.target.value)}
//                 />
//             </div>
//             {/* Skills */}
//             <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
//                 <div className="flex flex-wrap gap-2">
//                     {skills?.map((skill, index) => (
//                         <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
//                             <img src="/photoshop.png" alt="Photoshop" className="w-3 h-3" />
//                             <span>{skill}</span>
//                             <button
//                                 type="button"
//                                 className="text-red-500 focus:outline-none"
//                                 onClick={() => setSkills(skills.filter((_, i) => i !== index))}
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </span>
//                     ))}
//                 </div>
//             </div>
//             {/* Save Button */}
//             <div className="mt-8 flex justify-end">
//                 <button
//                     className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     onClick={handleSave}
//                 >
//                     Save
//                 </button>
//             </div>
//         </div>
//     );
// };

// const PrivacyContent = () => (
//     <div className="mt-6 space-y-4">
//         {/* Project owner */}
//         <div>
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Project owner</h3>
//             <div className="space-y-2">
//                 <label className="inline-flex items-center">
//                     <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" />
//                     <span className="ml-2 text-gray-700">Hide profile picture</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                     <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" />
//                     <span className="ml-2 text-gray-700">Hide profile</span>
//                 </label>
//             </div>
//         </div>
//     </div>
// );

// const MoreContent = () => (
//     <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//         {/* Credit card */}
//         <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" />
//             </svg>
//             <p className="text-sm text-gray-700">Credit card</p>
//         </div>
//         {/* Email */}
//         <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l7.89 5.26a2 2 0 002.22 0L21 8" />
//             </svg>
//             <p className="text-sm text-gray-700">Email</p>
//         </div>
//         {/* Bank accounts */}
//         <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m-9-9a9 9 0 019-9m-3 9h17m-17 0a2 2 0 00-2 2v2a2 2 0 002 2h17m-17 0a2 2 0 012-2v-2a2 2 0 01-2-2h17m-17 0a2 2 0 002 2v2a2 2 0 002 2h9" />
//             </svg>
//             <p className="text-sm text-gray-700">Bank accounts</p>
//         </div>
//         {/* Identity verification */}
//         <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h3m-3 3h3m-3-6h3" />
//             </svg>
//             <p className="text-sm text-gray-700">Identity verification</p>
//         </div>
//     </div>
// );

// const SettingPage: React.FC = () => {
//     const [activeTab, setActiveTab] = useState('Personal profile');
//     const [profileData, setProfileData] = useState<ProfileData | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const authToken = localStorage.getItem('token');
//                 if (!authToken) {
//                     setError("Authentication token not found.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get<ProfileResponse>(`http://127.0.0.1:8000/api/GetUser`, {
//                     headers: { Authorization: `Bearer ${authToken}` },
//                 });
//                 console.log("Profile Data:", response);
//                 setProfileData(response.data.data);
//                 setLoading(false);

//             } catch (e: any) {
//                 setError("Failed to load profile data.");
//                 console.error("Error fetching profile data:", e);
//                 setLoading(false);
//             }
//         };

//         fetchProfile();
//     }, []);

//     const handleSave = async (updatedData: ProfileData) => {
//         try {
//             const authToken = localStorage.getItem('token');
//             if (!authToken) {
//                 setError("Authentication token not found.");
//                 return;
//             }

//             const response = await axios.put<ProfileResponse>(`http://127.0.0.1:8000/api/profileUpdate`, updatedData, {
//                 headers: { Authorization: `Bearer ${authToken}` },
//             });
//             console.log("Profile Updated:", response);
//             setProfileData(response.data.data);
//         } catch (e: any) {
//             setError("Failed to update profile data.");
//             console.error("Error updating profile data:", e);
//         }
//     };

//     const handleTabClick = (tabName: string) => {
//         setActiveTab(tabName);
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen p-8 font-vazir" dir="rtl" lang="ar">
//             <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto">
//                 <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">إعدادات الحساب</h1>
//                 <div className="flex flex-col md:flex-row">
//                     {/* Sidebar Navigation */}
//                     <aside className="w-full md:w-64 border-b md:border-r md:border-b-0 pb-4 md:pr-8 md:pb-0">
//                         <nav className="space-y-4">
//                             <button
//                                 onClick={() => handleTabClick('Personal profile')}
//                                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-right ${
//                                     activeTab === 'Personal profile' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                                 }`}
//                             >
//                                 الملف الشخصي
//                             </button>
//                             <button
//                                 onClick={() => handleTabClick('Privacy')}
//                                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-right ${
//                                     activeTab === 'Privacy' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                                 }`}
//                             >
//                                 الخصوصية
//                             </button>
//                             <button
//                                 onClick={() => handleTabClick('More')}
//                                 className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-right ${
//                                     activeTab === 'More' ? 'bg-orange-50 text-orange-700 font-bold' : ''
//                                 }`}
//                             >
//                                 المزيد
//                             </button>
//                         </nav>
//                     </aside>

//                     {/* Main Content Area */}
//                     <main className="flex-1 pl-0 md:pl-8 mt-4 md:mt-0">
//                         {activeTab === 'Personal profile' && (
//                             <PersonalProfileContent
//                                 profileData={profileData}
//                                 loading={loading}
//                                 error={error}
//                                 onSave={handleSave}
//                             />
//                         )}
//                         {activeTab === 'Privacy' && <PrivacyContent />}
//                         {activeTab === 'More' && <MoreContent />}
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SettingPage;

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define TypeScript interfaces for data types
interface UserDataDetails {
  id?: number;
  userId?: number;
  specialist?: string;
  jobTitle?: string;
  description?: string;
  skillsOfWork?: string[];
  created_at?: string;
  updated_at?: string;
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
  user_data?: UserDataDetails;
  user_works?: any[];
  user_services?: any;
  user_projects?: any;
}

interface GetUserResponse {
  message?: string;
  user: User;
}

interface ProfileUpdateResponse {
  message: string;
  user: User;
}

interface PersonalProfileContentProps {
  userData: User | null;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onSkillAdd: (skill: string) => void;
  onSkillRemove: (indexToRemove: number) => void;
}
interface ErrorResponse {
  message: string;
}

const PersonalProfileContent: React.FC<PersonalProfileContentProps> = ({
  userData,
  onInputChange,
  onSkillAdd,
  onSkillRemove,
}) => {
  const [newSkill, setNewSkill] = useState<string>("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      onSkillAdd(newSkill.trim());
      setNewSkill("");
    }
  };

  return (
    <div className="space-y-4 mt-6">
      {/* Account type */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Account type
        </h3>
        <div className="space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-orange-600"
              name="accountType"
              value="freelancer"
              checked={userData?.accountType === "freelancer"}
              onChange={onInputChange}
            />
            <span className="ml-2 text-gray-700">Freelancer</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-orange-600"
              name="accountType"
              value="projectOwner"
              checked={userData?.accountType === "projectOwner"}
              onChange={onInputChange}
            />
            <span className="ml-2 text-gray-700">Project owner</span>
          </label>
        </div>
      </div>
      {/* Specialization and Job title */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-gray-700"
          >
            Specialization
          </label>
          <select
            id="specialization"
            name="specialization"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            value={userData?.user_data?.specialist || ""}
            onChange={onInputChange}
          >
            <option value="" disabled hidden>
              {userData?.user_data?.specialist || "Select Specialization"}
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Job title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            value={userData?.user_data?.jobTitle || ""}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      {/* Biography */}
      <div>
        <label
          htmlFor="biography"
          className="block text-sm font-medium text-gray-700"
        >
          Biography
        </label>
        <textarea
          id="biography"
          name="biography"
          rows={4}
          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          value={userData?.user_data?.description || ""}
          onChange={onInputChange}
        />
      </div>
      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {userData?.user_data?.skillsOfWork?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center space-x-1"
            >
              <span>{skill}</span>
              <button
                type="button"
                className="text-red-500 focus:outline-none"
                onClick={() => onSkillRemove(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Add new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs"
            onClick={handleAddSkill}
          >
            Add Skill
          </button>
        </div>
      </div>
    </div>
  );
};

const PrivacyContent: React.FC = () => (
  <div className="mt-6 space-y-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Privacy Settings
      </h3>
      <div className="space-y-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-orange-600"
            disabled={true}
          />
          <span className="ml-2 text-gray-700 opacity-50">
            Hide profile picture (Coming Soon)
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-orange-600"
            disabled={true}
          />
          <span className="ml-2 text-gray-700 opacity-50">
            Hide profile (Coming Soon)
          </span>
        </label>
      </div>
    </div>
  </div>
);

const MoreContent: React.FC = () => (
  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <p className="text-sm text-gray-400">Credit card (Coming Soon)</p>
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l7.89 5.26a2 2 0 002.22 0L21 8"
        />
      </svg>
      <p className="text-sm text-gray-400">Email (Coming Soon)</p>
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m-9-9a9 9 0 019-9m-3 9h17m-17 0a2 2 0 00-2 2v2a2 2 0 002 2h17m-17 0a2 2 0 012-2v-2a2 2 0 01-2-2h17m-17 0a2 2 0 002 2v2a2 2 0 002 2h9"
        />
      </svg>
      <p className="text-sm text-gray-400">Bank accounts (Coming Soon)</p>
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center opacity-50 cursor-not-allowed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12h3m-3 3h3m-3-6h3"
        />
      </svg>
      <p className="text-sm text-gray-400">
        Identity verification (Coming Soon)
      </p>
    </div>
  </div>
);

const SettingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Personal profile");
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<GetUserResponse>(
          "http://127.0.0.1:8000/api/GetUser",
          {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzM4NTIyNjE0LCJleHAiOjE3MzkzODY2MTQsIm5iZiI6MTczODUyMjYxNCwianRpIjoiZUpiR2xwRG9hQnhiVElvdCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Wqfd9Tu5LOuR96rr1Sh6ZTOKfoGBfUG7L2bUCIa93t8`,
            },
          }
        );
        setUserData(response.data.user);
      } catch (e: any) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError;
          setError(new Error(axiosError.message));
          toast.error(`Failed to load settings: ${axiosError.message}`);
        } else {
          setError(new Error("An unexpected error occurred"));
          toast.error("Failed to load settings: An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);



  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    const inputValue =
      type === "radio" ? value : type === "checkbox" ? checked : value;

    if (
      name === "accountType" ||
      name === "specialization" ||
      name === "jobTitle" ||
      name === "biography"
    ) {
      setUserData((prevUserData) => {
        if (!prevUserData) return prevUserData;

        const updatedUserData = { ...prevUserData };
        if (name === "accountType") {
          updatedUserData.accountType = inputValue as string;
        } else if (
          name === "specialization" ||
          name === "jobTitle" ||
          name === "biography"
        ) {
          if (!updatedUserData.user_data) {
            updatedUserData.user_data = {};
          }
          updatedUserData.user_data[
            name === "specialization"
              ? "specialist"
              : name === "jobTitle"
              ? "jobTitle"
              : "description"
          ] = inputValue as string;
        }
        return updatedUserData;
      });
    }
  };

  const handleSkillAdd = (skill: string) => {
    setUserData((prevUserData) => {
      if (!prevUserData) return prevUserData;

      const currentSkills = prevUserData.user_data?.skillsOfWork || [];
      return {
        ...prevUserData,
        user_data: {
          ...prevUserData.user_data,
          skillsOfWork: [...currentSkills, skill],
        },
      };
    });
  };

  const handleSkillRemove = (indexToRemove: number) => {
    setUserData((prevUserData) => {
      if (!prevUserData) return prevUserData;

      const currentSkills = prevUserData.user_data?.skillsOfWork || [];
      const updatedSkills = currentSkills.filter(
        (_, index) => index !== indexToRemove
      );
      return {
        ...prevUserData,
        user_data: {
          ...prevUserData.user_data,
          skillsOfWork: updatedSkills,
        },
      };
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      if (!userData) {
        toast.error("No user data to save.");
        return;
      }

      if (!userData.user_data?.jobTitle) {
        toast.warn("Job title is required.");
        setIsSaving(false);
        return;
      }

      const profileDataToUpdate = {
        accountType: userData.accountType,
        specialist: userData.user_data?.specialist,
        jobTitle: userData.user_data?.jobTitle,
        description: userData.user_data?.description,
        skillsOfWork: userData.user_data?.skillsOfWork,
      };
console.log("profileDataToUpdate",profileDataToUpdate);

      const response = await axios.put<ProfileUpdateResponse>(
        "http://127.0.0.1:8000/api/profileUpdate",
        profileDataToUpdate,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzM4NTIyNjE0LCJleHAiOjE3MzkzODY2MTQsIm5iZiI6MTczODUyMjYxNCwianRpIjoiZUpiR2xwRG9hQnhiVElvdCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Wqfd9Tu5LOuR96rr1Sh6ZTOKfoGBfUG7L2bUCIa93t8`,
          },
        }
      );

      console.log("Profile updated:", response.data);
      setUserData(response.data.user);
      toast.success("Profile updated successfully!");
    } catch (e: any) {
      setIsSaving(false);
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError;
        setError(new Error(axiosError.message));
        toast.error(
          `Failed to update profile: ${
            (axiosError.response?.data as ErrorResponse)?.message ||
            axiosError.message
          }`
        );
      } else {
        setError(new Error("An unexpected error occurred"));
        toast.error("Failed to update profile: An unexpected error occurred");
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return <div>Loading settings...</div>;
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
    <div className="bg-gray-100 min-h-screen p-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Setting</h1>
        <div className="flex">
          {/* Sidebar Navigation */}
          <aside className="w-64 border-r pr-8">
            <nav className="space-y-4">
              <button
                onClick={() => handleTabClick("Personal profile")}
                className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                  activeTab === "Personal profile"
                    ? "bg-orange-50 text-orange-700 font-bold"
                    : ""
                }`}
              >
                Personal profile
              </button>
              <button
                onClick={() => handleTabClick("Privacy")}
                className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                  activeTab === "Privacy"
                    ? "bg-orange-50 text-orange-700 font-bold"
                    : ""
                }`}
              >
                Privacy
              </button>
              <button
                onClick={() => handleTabClick("More")}
                className={`block py-2 px-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                  activeTab === "More"
                    ? "bg-orange-50 text-orange-700 font-bold"
                    : ""
                }`}
              >
                More
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 pl-8">
            {activeTab === "Personal profile" && (
              <PersonalProfileContent
                userData={userData}
                onInputChange={handleInputChange}
                onSkillAdd={handleSkillAdd}
                onSkillRemove={handleSkillRemove}
              />
            )}
            {activeTab === "Privacy" && <PrivacyContent />}
            {activeTab === "More" && <MoreContent />}
          </main>
        </div>
        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            onClick={handleSave}
            disabled={isSaving}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
