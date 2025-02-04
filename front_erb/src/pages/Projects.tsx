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

interface Project {
    id: number;
    user_id: number;
    project_name: string;
    project_description: string;
    project_image: string | null;
    required_skills: string;
    section: string;
    sub_section: string;
    project_link: string | null;
    project_question: string;
    status: string;
    created_at: string;
    updated_at: string;
    user: User;
}

interface ApiResponse {
    message: string;
    data: {
        current_page: number;
        data: Project[];
        first_page_url: string;
        from: number | null;
        last_page: number;
        last_page_url: string;
        links: { url: string | null; label: string; active: boolean }[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number | null;
        total: number;
    };
}


const itemsPerPage = 8; // Number of projects per page

interface OpenProjectsProps {
    // If you need to pass any props to OpenProjects, define them here
}

// --- Report Modal Component ---
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


// --- Project Card Component ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = React.useState(false); // State for Report Modal

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openReportModal = () => {
        setIsDropdownOpen(false); // Close project card dropdown
        setIsReportModalOpen(true); // Open report modal
    };

    const closeReportModal = () => {
        setIsReportModalOpen(false);
    };


    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-6 mb-4 shadow-sm relative">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${project.user.id}`} alt="Author Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-xl text-gray-900">{project.project_name}</h3>
                    <div className="text-sm text-gray-600 mt-1 flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span>{`${project.user.firstName} ${project.user.lastName}`}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414 1.414L9.586 10l-1.293 1.293a1 1 0 101.414 1.414L11 11.414l1.293 1.293a1 1 0 001.414-1.414L12.414 10l1.293-1.293a1 1 0 00-1.414-1.414L11 8.586 9.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293zM10 2a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd" />
                            </svg>
                            <span>{project.created_at}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                            </svg>
                            <span>0 Offers</span> {/* Offers data is not in your API response */}
                        </div>
                    </div>
                    <p className="text-gray-700 mt-3 text-sm">{project.project_description}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <div className="font-semibold text-orange-600 text-xl">TBD</div> {/* Budget data is not in your API response */}
                    <button
                        onClick={toggleDropdown}
                        className="relative inline-flex justify-center items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a5.25 5.25 0 1010.5 0 5.25 5.25 0 00-10.5 0zM12.75 10.5h-1.5m3 0h-3m-3 0h-1.5m9 0H21a.75.75 0 00-.75-.75V8.25a.75.75 0 00-.75-.75h-2.25c.03.225.03.45.03.675a3 3 0 01-3 3H9.75a3 3 0 01-3-3c0-.225.0-.45-.03-.675H6a.75.75 0 00-.75.75v2.25a.75.75 0 00.75.75H12.75zM15 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl z-10 border border-gray-200">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md" role="menuitem">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.08 2.833-4.918-.903-8.428-4.918-8.428-4.918v16.266c0 .621.45 1.164 1.072 1.164h10.584c.622 0 1.072-.543 1.072-1.164V8.25zm-18.907 1.95l2.499-1.874m0 0c1.092-.82 2.932.32 2.932 1.958v10.012c0 .557.402 1.048.959 1.048h7.885c.557 0 1.048-.49.959-1.048v-10.016l2.499-1.875m-13.504-.22l2.499 1.875m0 0c1.091.82 2.932-.32 2.932-1.958v-10.012c0-.557.402-1.048.959-1.048h7.885c.557 0 1.048.49.959 1.048v10.016l2.499 1.875m-13.504.22v-3.433" />
                                    </svg>
                                    <span>Add to favorites</span>
                                </div>
                            </button>
                            <button onClick={openReportModal} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md" role="menuitem">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.932 3.374h16.636c1.716 0 2.802-1.874 1.932-3.374l-9.303-16.25C12.529 1.485 11.471 1.485 9.303 3.75l-9.303 16.25zM12 17.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <span>Report content</span>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <ReportModal isOpen={isReportModalOpen} onClose={closeReportModal} /> {/* Render Report Modal */}
        </div>
    );
};



const FilterSidebar: React.FC<{
    onCategoryChange: (categories: string[]) => void;
    onDurationChange: (duration: string | null) => void;
    onBudgetChange: (min: number | null, max: number | null) => void;
    onClearFilters: () => void;
}> = ({ onCategoryChange, onDurationChange, onBudgetChange, onClearFilters }) => {
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [selectedDuration, setSelectedDuration] = React.useState<string | null>(null);
    const [minBudget, setMinBudget] = React.useState<string>('');
    const [maxBudget, setMaxBudget] = React.useState<string>('');
    const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(true);
    const [isDurationOpen, setIsDurationOpen] = React.useState(true);
    const [isBudgetOpen, setIsBudgetOpen] = React.useState(true);

    const categoriesList = [
        "Web Development", "Mobile App Development", "Design", "Marketing", "Writing", "Data Entry", "Other" // Example categories - adjust to your API
    ];

    const durations = [
        "Less than 1 week", "1-2 weeks", "2 weeks - 1 month", "1-3 months", "More than 3 months" // Example durations - adjust to your needs
    ];

    const handleCategoryCheckbox = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleDurationChange = (duration: string) => {
        setSelectedDuration(duration === selectedDuration ? null : duration);
    };

    const handleApplyFilters = () => {
        onCategoryChange(selectedCategories);
        onDurationChange(selectedDuration);
        onBudgetChange(Number(minBudget) || null, Number(maxBudget) || null);
    };

    const handleClearFiltersLocal = () => {
        setSelectedCategories([]);
        setSelectedDuration(null);
        setMinBudget('');
        setMaxBudget('');
        onClearFilters();
    };

    useEffect(() => {
        handleApplyFilters();
    }, [selectedCategories, selectedDuration, minBudget, maxBudget]);


    return (
        <aside className="bg-gray-50 p-5 rounded-xl w-full md:w-72 shadow-sm">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-semibold text-lg text-gray-800">Search filters</h2>
                <button onClick={handleClearFiltersLocal} className="text-sm text-gray-500 hover:text-gray-700">Clear all filters</button>
            </div>

            <div className="mb-5">
                <label htmlFor="searchProject" className="block text-sm font-medium text-gray-700 mb-2">Search for a project</label>
                <input type="text" id="searchProject" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Project name..." />
            </div>

            <div className="mb-5">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
                    <h3 className="font-semibold text-gray-700">Categories</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}>
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`space-y-2 overflow-hidden transition-max-height duration-300 ${isCategoriesOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {categoriesList.map(category => (
                        <div key={category} className="flex items-center">
                            <input
                                id={`category-${category}`}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryCheckbox(category)}
                            />
                            <label htmlFor={`category-${category}`} className="ml-2 text-gray-700 text-sm">{category}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => setIsDurationOpen(!isDurationOpen)}>
                    <h3 className="font-semibold text-gray-700">Delivery duration</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${isDurationOpen ? 'rotate-180' : ''}`}>
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`space-y-2 overflow-hidden transition-max-height duration-300 ${isDurationOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {durations.map(duration => (
                        <div key={duration} className="flex items-center">
                            <input
                                type="radio"
                                id={`duration-${duration.replace(/\s/g, '')}`}
                                name="deliveryDuration"
                                className="form-radio h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                                checked={selectedDuration === duration}
                                onChange={() => handleDurationChange(duration)}
                            />
                            <label htmlFor={`duration-${duration.replace(/\s/g, '')}`} className="ml-2 text-gray-700 text-sm">{duration}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => setIsBudgetOpen(!isBudgetOpen)}>
                    <h3 className="font-semibold text-gray-700">Budget</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${isBudgetOpen ? 'rotate-180' : ''}`}>
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`flex space-x-2 overflow-hidden transition-max-height duration-300 ${isBudgetOpen ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="flex-1">
                        <label htmlFor="minBudget" className="block text-sm text-gray-700">Minimum</label>
                        <input
                            type="number"
                            id="minBudget"
                            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            placeholder="Min"
                            value={minBudget}
                            onChange={(e) => setMinBudget(e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="maxBudget" className="block text-sm text-gray-700">Maximum</label>
                        <input
                            type="number"
                            id="maxBudget"
                            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            placeholder="Max"
                            value={maxBudget}
                            onChange={(e) => setMaxBudget(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 w-full md:max-w-lg">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                </div>
                <input
                    type="search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
        </form>
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


// --- Sorting Dropdown Component ---
const SortingDropdown: React.FC<{ onSort: (option: string) => void }> = ({ onSort }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const sortingOptions = ["Newest", "Oldest", "Lower offers", "Most offers"]; // Example options

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSortOption = (option: string) => {
        onSort(option);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    id="sort-menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                >
                    Newest {/* Default Sorting Text - you can make this dynamic based on selectedSortOption */}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        {sortingOptions.map(option => (
                            <button
                                key={option}
                                onClick={() => handleSortOption(option)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem" tabIndex={-1}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


// --- Main OpenProjects Component ---
const OpenProjects: React.FC<OpenProjectsProps> = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [selectedDuration, setSelectedDuration] = React.useState<string | null>(null);
    const [budgetRange, setBudgetRange] = React.useState<{ min: number | null, max: number | null }>({ min: null, max: null });
    const [selectedSortOption, setSelectedSortOption] = useState<string>("Newest"); // State for selected sorting option


    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<ApiResponse>(`http://127.0.0.1:8000/api/projects?page=${currentPage}`);
                setProjects(response.data.data.data);
                setTotalPages(response.data.data.last_page);
                applyFiltersAndSearch(response.data.data.data); // Apply filters on initial load
            } catch (e) {
                setError('Failed to load projects.');
                if (axios.isAxiosError(e)) {
                    console.error('Axios error:', e.message);
                } else {
                    console.error('An unexpected error occurred:', e);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [currentPage]);


    React.useEffect(() => {
        applyFiltersAndSearch(projects); // Re-apply filters when filter criteria or projects change
    }, [searchQuery, selectedCategories, selectedDuration, budgetRange, projects]);

    React.useEffect(() => {
        setTotalPages(Math.ceil(filteredProjects.length / itemsPerPage) || 1);
        setCurrentPage(1);
    }, [filteredProjects]);


    const getCurrentPageProjects = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredProjects.slice(startIndex, endIndex);
    };


    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCategoryChange = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const handleDurationChange = (duration: string | null) => {
        setSelectedDuration(duration);
    };

    const handleBudgetChange = (min: number | null, max: number | null) => {
        setBudgetRange({ min, max });
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedCategories([]);
        setSelectedDuration(null);
        setBudgetRange({ min: null, max: null });
        applyFiltersAndSearch(projects); // Re-apply filters on clear to reset to initial projects
    };

    const handleSortChange = (option: string) => {
        setSelectedSortOption(option);
        // Sort logic will be applied in applyFiltersAndSearch
        applyFiltersAndSearch(projects); // Re-apply filters and sorting
    };


    const applyFiltersAndSearch = (currentProjects: Project[]) => {
        let tempProjects = [...currentProjects];

        // Search Filter
        if (searchQuery) {
            tempProjects = tempProjects.filter(project =>
                project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.project_description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category Filter
        if (selectedCategories.length > 0) {
            tempProjects = tempProjects.filter(project =>
                selectedCategories.includes(project.section)
            );
        }

        // Duration Filter - Placeholder - Adapt based on your API data
        if (selectedDuration) {
            console.warn("Duration filter is not yet implemented based on API data structure.");
        }

        // Budget Filter - Placeholder - Adapt based on your API data
        if (budgetRange.min !== null || budgetRange.max !== null) {
            console.warn("Budget filter is not yet implemented based on API data structure.");
        }

        // Sorting Logic
        if (selectedSortOption === "Oldest") {
            tempProjects.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        } else if (selectedSortOption === "Newest") {
            tempProjects.sort((b, a) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        } else if (selectedSortOption === "Lower offers") {
            // Assuming 'offers' could be added to Project type and API response, default to 0 if missing
            tempProjects.sort((a, b) => (/* a.offers || 0 */ 0) - (/* b.offers || 0 */ 0)); // Placeholder for offers sort
            console.warn("Sorting by 'Lower offers' is placeholder as offers data is not available.");
        } else if (selectedSortOption === "Most offers") {
            // Assuming 'offers' could be added to Project type and API response, default to 0 if missing
            tempProjects.sort((b, a) => (/* a.offers || 0 */ 0) - (/* b.offers || 0 */ 0)); // Placeholder for offers sort
            console.warn("Sorting by 'Most offers' is placeholder as offers data is not available.");
        }


        setFilteredProjects(tempProjects);
    };


    if (loading) {
        return <div className="text-center">Loading projects...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">Error: {error}</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Open projects</h1>
                    <SortingDropdown onSort={handleSortChange} /> {/* Sorting Dropdown */}
                </div>


                <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
                    <FilterSidebar
                        onCategoryChange={handleCategoryChange}
                        onDurationChange={handleDurationChange}
                        onBudgetChange={handleBudgetChange}
                        onClearFilters={handleClearFilters}
                    />

                    <main className="flex-1">
                        <SearchBar onSearch={handleSearch} />
                        <div>
                            {getCurrentPageProjects().map(project => (
                                <ProjectCard key={project.id} project={project} />
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

export default OpenProjects;