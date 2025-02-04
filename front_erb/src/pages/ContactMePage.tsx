import React, { useState } from 'react';
import axios from 'axios';

interface ContactMePageProps {
    freelancerName?: string; // Optional: Pass freelancer name as prop
    freelancerSpecialization?: string; // Optional: Pass freelancer specialization as prop
    freelancerAvatarUrl?: string; // Optional: Pass freelancer avatar URL as prop
    freelancerRating?: number; // Optional: Pass freelancer rating as prop
}

const ContactMePage: React.FC<ContactMePageProps> = ({
    freelancerName = "Ahmed M.", // Default freelancer name
    freelancerSpecialization = "Grafic designer", // Default specialization
    freelancerAvatarUrl = "https://i.pravatar.cc/150?u=ahmed_m", // Default avatar URL
    freelancerRating = 4.5 // Default rating
}) => {
    const [privateMessage, setPrivateMessage] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState<File[]>([]); // For file upload - simplified for now
    const [requiredSkills, setRequiredSkills] = useState('');
    const [section, setSection] = useState('');
    const [subsection, setSubsection] = useState('');
    const [expectedBudget, setExpectedBudget] = useState('');
    const [expectedDuration, setExpectedDuration] = useState('');

    const skillsOptions = ["", "JavaScript", "React", "Laravel", "Node.js", "Python", "Design", "Marketing", "Writing"]; // Example skills
    const sectionOptions = ["", "Web Development", "Mobile App Development", "Design", "Marketing", "Writing", "Other"]; // Example sections
    const subsectionOptions = ["", "Frontend", "Backend", "Full Stack", "UI/UX Design", "Graphic Design", "Content Writing", "SEO", "Social Media"]; // Example subsections
    const budgetOptions = ["", "Less than $500", "$500 - $1000", "$1000 - $2000", "$2000+"]; // Example budgets
    const durationOptions = ["", "Less than 1 week", "1-2 weeks", "2 weeks - 1 month", "1-3 months", "More than 3 months"]; // Example durations


    const handlePublish = async () => {
        const formData = new FormData();
        formData.append('freelancer_name', freelancerName); // Or freelancer ID if available
        formData.append('private_message', privateMessage);
        formData.append('project_title', projectTitle);
        formData.append('description', description);
        photos.forEach(photo => formData.append('photos[]', photo)); // Simplified photo upload
        formData.append('required_skills', requiredSkills);
        formData.append('section', section);
        formData.append('subsection', subsection);
        formData.append('expected_budget', expectedBudget);
        formData.append('expected_duration', expectedDuration);

        try {
            const response = await axios.post('http://your-laravel-backend.com/api/contact-freelancer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Important for file uploads
                }
            });
            console.log('Contact form submitted successfully!', response.data);
            alert('Contact form submitted successfully!'); // Replace with better success handling
            // Optionally reset the form here
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('Error submitting form. Please try again.'); // Replace with better error handling
        }
    };

    const handleCancel = () => {
        // Implement cancel logic - e.g., clear form, navigate back
        console.log('Contact form cancelled');
        alert('Contact form cancelled'); // Replace with actual cancel action
    };


    return (
        <div className="bg-gray-100 min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-lg w-full">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact me</h2>

                    {/* Freelancer Info Section */}
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src={freelancerAvatarUrl} alt="Freelancer Avatar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">{freelancerName}</h3>
                                <div className="flex items-center space-x-1 text-sm text-yellow-400">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.928c-.507-1.04-1.236-1.85-1.953-2.671a.75.75 0 0 1 .957-1.052c.842.484 1.771 1.025 2.72 1.619C12.056 2.252 13.142 2.75 14.057 3.357c.795.515 1.564 1.025 2.173 1.619a.75.75 0 0 1 .957 1.052c-.716.82-1.445 1.63-1.953 2.671-.618 1.276-.882 2.616-.843 3.974.039 1.358.303 2.698.843 3.974.508 1.04 1.237 1.85 1.953 2.671a.75.75 0 0 1-.957 1.052c-.61-.35-1.304-.75-2.02-.994C15.915 17.75 14.829 17.25 13.914 16.643c-.795-.515-1.564-1.025-2.173-1.619a.75.75 0 0 1-.957-1.052c.716-.82 1.445-1.63 1.953-2.671.618-1.276.882-2.616.843-3.974-.039-1.358-.303-2.698-.843-3.974-.508-1.04-1.237-1.85-1.953-2.671a.75.75 0 0 1 .957-1.052zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/></svg>
                                    ))}
                                    <span>({freelancerRating.toFixed(1)})</span>
                                </div>
                                <p className="text-gray-600 text-sm">{freelancerSpecialization}</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="privateMessage" className="block text-sm font-medium text-gray-700">Send private message</label>
                            <textarea
                                id="privateMessage"
                                rows={3}
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="Write your message here..."
                                value={privateMessage}
                                onChange={(e) => setPrivateMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">Project Title</label>
                            <input
                                type="text"
                                id="projectTitle"
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="e.g., Design a logo for my startup"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Describe</label>
                            <textarea
                                id="description"
                                rows={4}
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="Describe your project in detail..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photos</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4h16m-16 0l20 20m-10-10l10 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="photo-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
                                            <span>Upload photos from here</span>
                                            <input id="photo-upload" type="file" className="sr-only" multiple onChange={(e) => e.target.files && setPhotos(Array.from(e.target.files))} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="requiredSkills" className="block text-sm font-medium text-gray-700">Required skills</label>
                            <select
                                id="requiredSkills"
                                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                value={requiredSkills}
                                onChange={(e) => setRequiredSkills(e.target.value)}
                            >
                                <option value="">Select skills</option>
                                {skillsOptions.map(skill => (
                                    <option key={skill} value={skill}>{skill}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
                                <select
                                    id="section"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                >
                                    <option value="">Select section</option>
                                    {sectionOptions.map(sec => (
                                        <option key={sec} value={sec}>{sec}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="subsection" className="block text-sm font-medium text-gray-700">Subsection</label>
                                <select
                                    id="subsection"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    value={subsection}
                                    onChange={(e) => setSubsection(e.target.value)}
                                >
                                    <option value="">Select subsection</option>
                                    {subsectionOptions.map(sub => (
                                        <option key={sub} value={sub}>{sub}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="expectedBudget" className="block text-sm font-medium text-gray-700">Expected budget</label>
                                <select
                                    id="expectedBudget"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    value={expectedBudget}
                                    onChange={(e) => setExpectedBudget(e.target.value)}
                                >
                                    <option value="">Select budget</option>
                                    {budgetOptions.map(budget => (
                                        <option key={budget} value={budget}>{budget}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="expectedDuration" className="block text-sm font-medium text-gray-700">Expected duration of delivery</label>
                                <select
                                    id="expectedDuration"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    value={expectedDuration}
                                    onChange={(e) => setExpectedDuration(e.target.value)}
                                >
                                    <option value="">Select duration</option>
                                    {durationOptions.map(duration => (
                                        <option key={duration} value={duration}>{duration}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center cursor-pointer" >
                                <label className="block text-sm font-medium text-gray-700">Advanced setting</label>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-4">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactMePage;