import React, { useState, useEffect } from 'react';
import axios from 'axios';

// --- Types --- (Keep types at the top for clarity)
interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    role: string;
    accountType: string;
    isEmailVerified: number;
    created_at: string;
    updated_at: string;
    profilePhoto: string | null;
    Region: string | null;
    Phone_number: string | null;
    Gender: string | null;
}

interface UserData {
    id: number;
    userId: number;
    specialist: string | null;
    jobTitle: string | null;
    description: string | null;
    skillsOfWork: string | null; // API returns stringified JSON array
    created_at: string;
    updated_at: string;
}


interface Freelancer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    role: string;
    accountType: string;
    isEmailVerified: number;
    created_at: string;
    updated_at: string;
    profilePhoto: string | null;
    Region: string | null;
    Phone_number: string | null;
    Gender: string | null;
    user_data: UserData | null; // User data is now of type UserData or null
    user_works: any; // Adjust type if user_works has a specific structure
    specialist?: string; // Optional specialization field - for easier filtering
    jobTitle?: string;       // Optional jobTitle field - for easier filtering
    skillsOfWork?: string[];         // Optional skills field - for easier filtering (parsed array)
    country?: string;        // Optional country field
    rate?: number;           // Optional rate field (number of stars)
}

interface FreelancerApiResponse {
    freelancers: Freelancer[];
}

const itemsPerPage = 8; // Number of freelancers per page

interface FreelancerListProps {
    // You can add props if needed
}

// --- Report Modal Component (Reused from OpenProjects - Ensure it's defined or import it) ---
const ReportModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20">
            <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Report content</h2>
                <div className="space-y-3">
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-orange-500" name="reportReason" value="not_like" />
                            <span className="ml-2 text-gray-700 text-sm">I did not like this content</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-orange-500" name="reportReason" value="annoying_spam" />
                            <span className="ml-2 text-gray-700 text-sm">This content is annoying, repetitive or spam</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-orange-500" name="reportReason" value="terms_violation" />
                            <span className="ml-2 text-gray-700 text-sm">This content violates independent's terms of use</span>
                        </label>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="moreInfo" className="block text-sm text-gray-700 mb-1">More Information (Optional)</label>
                    <textarea id="moreInfo" rows={3} className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
                <div className="mt-6 flex justify-end space-x-2">
                    <button onClick={onClose} type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Cancel</button>
                    <button onClick={onClose} type="button" className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Send</button>
                </div>
            </div>
        </div>
    );
};


// --- Freelancer Card Component ---
const FreelancerCard: React.FC<{ freelancer: Freelancer }> = ({ freelancer }) => {
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen);
    };

    const openReportModal = () => {
        setIsContactDropdownOpen(false);
        setIsReportModalOpen(true);
    };

    const closeReportModal = () => {
        setIsReportModalOpen(false);
    };


    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-6 mb-4 shadow-sm relative">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${freelancer.id}`} alt="Freelancer Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-xl text-gray-900">{`${freelancer.firstName} ${freelancer.lastName}`}</h3>
                    <div className="text-sm text-gray-600 mt-1 flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            {/* Placeholder for rating stars - replace with actual rating data */}
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                    <path fillRule="evenodd" d="M10.868 2.512A1 1 0 009.132 2.512L7.166 6.46l-4.845.702a1 1 0 00-.552 1.667l3.69 3.185-1.278 4.703a1 1 0 001.513 1.057l4.19-2.922 4.19 2.922a1 1 0 001.513-1.057l-1.278-4.703 3.69-3.185a1 1 0 00-.553-1.667l-4.845-.702L10.868 2.512z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>100.00</span> {/* Placeholder for rate - replace with actual rate data */}
                            <span className="text-gray-400">%</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9h.008v.008H15.75V9zm-5.25-.375a.75.75 0 00-.75.75v4.125a.75.75 0 00.75.75h3a.75.75 0 00.75-.75V9.375a.75.75 0 00-.75-.75h-3zM18 9.75a.75.75 0 01-.75.75h-2.253l-1.023 2.302a11.25 11.25 0 00-2.64 3.918c-.382.542-.58 1.18a.75.75 0 01-.577 1.206.75.75 0 01-1.205-.577 12.75 12.75 0 013.45-5.013l1.023-2.302H17.25a.75.75 0 01.75-.75zM6 9.75a.75.75 0 00.75.75h2.253l1.023 2.302a11.25 11.25 0 012.64 3.918c.382.542.58 1.18a.75.75 0 00.577 1.206.75.75 0 001.205-.577 12.75 12.75 0 00-3.45-5.013L8.253 10.5H6.75a.75.75 0 00-.75-.75z" clipRule="evenodd" />
                            </svg>
                            <span>{freelancer.user_data?.specialist || 'No Specialization'}</span> {/* Display specialization or default text */}
                        </div>
                    </div>
                    <p className="text-gray-700 mt-3 text-sm">{freelancer.user_data?.description || 'No Description'}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={toggleContactDropdown}
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                id="options-menu-button"
                                aria-expanded={isContactDropdownOpen}
                                aria-haspopup="true"
                            >
                                Contact me
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {isContactDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1}>
                                        Contact via chat
                                    </button>
                                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1}>
                                        Contact via call
                                    </button>
                                    <button onClick={openReportModal} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1}>
                                        Report content
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ReportModal isOpen={isReportModalOpen} onClose={closeReportModal} />
        </div>
    );
};


const FreelancerFilterSidebar: React.FC<{
    onSearchFreelancer: (query: string) => void;
    onSpecializationChange: (specialization: string) => void;
    onJobTitleChange: (jobTitle: string) => void;
    onSkillsChange: (skills: string) => void;
    onCountryChange: (country: string) => void;
    onRateChange: (rate: number | null) => void;
    onClearFilters: () => void;
}> = ({ onSearchFreelancer, onSpecializationChange, onJobTitleChange, onSkillsChange, onCountryChange, onRateChange, onClearFilters }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const [jobTitleQuery, setJobTitleQuery] = useState('');
    const [skillsQuery, setSkillsQuery] = useState('');
    const [countryQuery, setCountryQuery] = useState('');
    const [selectedRate, setSelectedRate] = useState<number | null>(null);


    const specializationOptions = ["All", "Web Development", "Graphic Designer", "Marketing Specialist", "Writer"]; // Example options - Match API data

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        onSearchFreelancer(event.target.value);
    };


    const handleSpecializationChangeLocal = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpecialization(event.target.value);
        onSpecializationChange(event.target.value);
    };

    const handleJobTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitleQuery(event.target.value);
        onJobTitleChange(event.target.value);
    };

    const handleSkillsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSkillsQuery(event.target.value);
        onSkillsChange(event.target.value);
    };

    const handleCountryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountryQuery(event.target.value);
        onCountryChange(event.target.value);
    };

    const handleRateStarClick = (rate: number) => {
        setSelectedRate(rate);
        onRateChange(rate);
    };

    const handleClearAllFilters = () => {
        setSearchQuery('');
        setSelectedSpecialization('');
        setJobTitleQuery('');
        setSkillsQuery('');
        setCountryQuery('');
        setSelectedRate(null);
        onClearFilters();
    };


    return (
        <aside className="bg-gray-50 p-5 rounded-xl w-full md:w-72 shadow-sm">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-semibold text-lg text-gray-800">Search on freelancers</h2>
                <button onClick={handleClearAllFilters} className="text-sm text-gray-500 hover:text-gray-700">Clear all filters</button>
            </div>

            <div className="mb-5">
                <label htmlFor="searchFreelancer" className="block text-sm font-medium text-gray-700 mb-2">Search on freelancers</label>
                <input
                    type="text"
                    id="searchFreelancer"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Freelancer name..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">specialization</label>
                <select
                    id="specialization"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    value={selectedSpecialization}
                    onChange={handleSpecializationChangeLocal}
                >
                    <option value="" hidden>All</option>
                    {specializationOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className="mb-5">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">Job title</label>
                <input
                    type="text"
                    id="jobTitle"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Job title..."
                    value={jobTitleQuery}
                    onChange={handleJobTitleInputChange}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                <input
                    type="text"
                    id="skills"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Skills..."
                    value={skillsQuery}
                    onChange={handleSkillsInputChange}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input
                    type="text"
                    id="country"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Country..."
                    value={countryQuery}
                    onChange={handleCountryInputChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rate</label>
                <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`w-5 h-5 ${selectedRate && star <= selectedRate ? 'text-yellow-400 hover:text-yellow-500 cursor-pointer' : 'text-gray-300 hover:text-gray-400 cursor-pointer'}`}
                            onClick={() => handleRateStarClick(star)}
                        >
                            <path fillRule="evenodd" d="M10.868 2.512A1 1 0 009.132 2.512L7.166 6.46l-4.845.702a1 1 0 00-.552 1.667l3.69 3.185-1.278 4.703a1 1 0 001.513 1.057l4.19-2.922 4.19 2.922a1 1 0 001.513-1.057l-1.278-4.703 3.69-3.185a1 1 0 00-.553-1.667l-4.845-.702L10.868 2.512z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
            </div>
        </aside>
    );
};

const Pagination: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages <= 17 ? totalPages : 17 }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-8">
            <nav aria-label="Projects pagination">
                <ul className="inline-flex space-x-2">
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="py-2 px-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M15.793 7.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L12 9.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M7 10a1 1 0 011-1h5a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </li>
                    {pages.map(page => {
                        if (page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2) {
                            return (
                                <li key={page}>
                                    <button
                                        onClick={() => onPageChange(page)}
                                        className={`py-2 px-3 rounded-lg border border-gray-300 ${currentPage === page ? 'bg-orange-500 text-white' : 'bg-white hover:bg-gray-100'}`}
                                        aria-current={currentPage === page ? "page" : undefined}
                                    >
                                        {page}
                                    </button>
                                </li>
                            );
                        } else if (pages[page - 2] !== page - 1 && (page === currentPage - 3 || page === currentPage + 3)) {
                            return (
                                <li key={`ellipsis-${page}`}>
                                    <span className="py-2 px-3">...</span>
                                </li>
                            );
                        }
                        return null;
                    })}
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="py-2 px-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10.207 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L12.414 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M13 10a1 1 0 01-1 1H7a1 1 0 110-2h5a1 1 0 011 1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
const FreelancerList: React.FC<FreelancerListProps> = () => {
    const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFreelancers, setFilteredFreelancers] = useState<Freelancer[]>([]); // State for filtered freelancers
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const [jobTitleQuery, setJobTitleQuery] = useState('');
    const [skillsQuery, setSkillsQuery] = useState('');
    const [countryQuery, setCountryQuery] = useState('');
    const [selectedRate, setSelectedRate] = useState<number | null>(null);


    
    useEffect(() => {
        const fetchFreelancers = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<FreelancerApiResponse>(`http://127.0.0.1:8000/api/GetAllFreelancers?page=${currentPage}`);
                // Process skillsOfWork to be array and flatten user_data for easier access
                const processedFreelancers = response.data.freelancers.map(freelancer => ({
                    ...freelancer,
                    specialist: freelancer.user_data?.specialist || undefined, // Flatten specialist
                    jobTitle: freelancer.user_data?.jobTitle || undefined,     // Flatten jobTitle
                    skillsOfWork: freelancer.user_data?.skillsOfWork ? JSON.parse(freelancer.user_data.skillsOfWork) : [], // Parse skills array
                }));
                setFreelancers(processedFreelancers);
                setFilteredFreelancers(processedFreelancers); // Initialize filtered freelancers with fetched data
                setTotalPages(Math.ceil(response.data.freelancers.length / itemsPerPage)); // Adjust totalPages calculation if API provides total count
            } catch (e) {
                setError('Failed to load freelancers.');
                if (axios.isAxiosError(e)) {
                    console.error('Axios error:', e.message);
                } else {
                    console.error('An unexpected error occurred:', e);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFreelancers();
    }, [currentPage]);

    useEffect(() => {
        applyFilters();
    }, [searchQuery, selectedSpecialization, jobTitleQuery, skillsQuery, countryQuery, selectedRate, freelancers]); // Apply filters when any filter criteria or freelancers change


    useEffect(() => {
        setTotalPages(Math.ceil(filteredFreelancers.length / itemsPerPage) || 1);
        setCurrentPage(1); // Reset to first page when filters/search change
    }, [filteredFreelancers]);


    const getCurrentPageFreelancers = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredFreelancers.slice(startIndex, endIndex);
    };

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleSearchFreelancer = (query: string) => {
        setSearchQuery(query);
    };

    const handleSpecializationChange = (specialization: string) => {
        setSelectedSpecialization(specialization);
    };

    const handleJobTitleChange = (jobTitle: string) => {
        setJobTitleQuery(jobTitle);
    };

    const handleSkillsChange = (skills: string) => {
        setSkillsQuery(skills);
    };

    const handleCountryChange = (country: string) => {
        setCountryQuery(country);
    };

    const handleRateChange = (rate: number | null) => {
        setSelectedRate(rate);
    };


    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedSpecialization('');
        setJobTitleQuery('');
        setSkillsQuery('');
        setCountryQuery('');
        setSelectedRate(null);
        setFilteredFreelancers(freelancers); // Reset filtered freelancers to all freelancers
    };



    const applyFilters = () => {
        let tempFreelancers = [...freelancers];

        // Search Filter (Name or Username)
        if (searchQuery) {
            tempFreelancers = tempFreelancers.filter(freelancer =>
                `${freelancer.firstName} ${freelancer.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
                freelancer.userName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Specialization Filter
        if (selectedSpecialization && selectedSpecialization !== "All") {
            tempFreelancers = tempFreelancers.filter(freelancer =>
                freelancer.specialist?.toLowerCase() === selectedSpecialization.toLowerCase()
            );
        }

        // Job Title Filter
        if (jobTitleQuery) {
            tempFreelancers = tempFreelancers.filter(freelancer =>
                freelancer.jobTitle?.toLowerCase().includes(jobTitleQuery.toLowerCase())
            );
        }

        // Skills Filter
        if (skillsQuery) {
            tempFreelancers = tempFreelancers.filter(freelancer =>
                freelancer.skillsOfWork?.some(skill => skill.toLowerCase().includes(skillsQuery.toLowerCase()))
            );
        }

        // Country Filter
        if (countryQuery) {
            tempFreelancers = tempFreelancers.filter(freelancer =>
                freelancer.country?.toLowerCase().includes(countryQuery.toLowerCase())
            );
        }

        // Rate Filter (Star Rating) - Placeholder, adjust if API provides rate data
        if (selectedRate) {
            // This is still a placeholder, you'd need actual rate data from API to filter
            console.warn("Rate filter is still a placeholder as API response doesn't contain rate data.");
        }


        setFilteredFreelancers(tempFreelancers);
    };


    if (loading) {
        return <div className="text-center">Loading freelancers...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">Error: {error}</div>;
    }


    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto px-6 py-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Search on freelancers</h1>

                <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
                    <FreelancerFilterSidebar
                        onSearchFreelancer={handleSearchFreelancer}
                        onSpecializationChange={handleSpecializationChange}
                        onJobTitleChange={handleJobTitleChange}
                        onSkillsChange={handleSkillsChange}
                        onCountryChange={handleCountryChange}
                        onRateChange={handleRateChange}
                        onClearFilters={handleClearFilters}
                    />

                    <main className="flex-1">
                        <div>
                            {getCurrentPageFreelancers().map(freelancer => (
                                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FreelancerList;