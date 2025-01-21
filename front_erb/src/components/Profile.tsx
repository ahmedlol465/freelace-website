import React, { useState } from "react";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import axios, { AxiosError } from "axios";

interface Specialization {
  name: string;
}

interface Skill {
  name: string;
}

const specializations: Specialization[] = [
  { name: "Translate" },
  { name: "Web design" },
  { name: "Web development" },
  { name: "Illustrator" },
  { name: "Photo shop" },
  { name: "Write articles" },
  { name: "Graphic design" },
  { name: "Logo design" },
];

const availableSkills: Skill[] = [
  { name: "Translate" },
  { name: "Web design" },
  { name: "Web development" },
  { name: "Illustrator" },
  { name: "Photo shop" },
  { name: "Write articles" },
  { name: "Graphic design" },
  { name: "Logo design" },
];

interface AccountDataProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupFormStep2: React.FC<AccountDataProps> = ({setCurrentStep}: any) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [biography, setBiography] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [skillSearchTerm, setSkillSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const toggleSpecializationDropdown = () => {
    setIsSpecializationOpen(!isSpecializationOpen);
  };

  const handleSpecializationSelect = (specialization: Specialization) => {
    setSelectedSpecialization(specialization);
    setIsSpecializationOpen(false);
  };

  const handleSkillSelect = (skill: Skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillSearchTerm("");
    setIsSkillsOpen(false);
  };

  const removeSkill = (skill: Skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s.name !== skill.name));
  };

  const filteredSkills = availableSkills.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem('currentStep', '3');
    // Validate form data
    if (!selectedSpecialization || !jobTitle || !biography || selectedSkills.length === 0) {
      setError("Please fill out all fields.");
      return;
    }

    // Prepare the data for the API
    const formData = {
      userId: "1", // Replace with the actual user ID (e.g., from localStorage or context)
      specialist: selectedSpecialization.name,
      jobTitle: jobTitle,
      description: biography,
      skillsOfWork: selectedSkills.map((skill) => skill.name),
    };

    try {
      // Send the data to the API
      const response = await axios.post("http://127.0.0.1:8000/api/UserData", formData);

      // Handle success
      setSuccessMessage(response.data.message);
      setError(null);
      console.log("User data created successfully:", response.data.userData);
      localStorage.setItem('currentStep', '3');
      setCurrentStep(3);
      
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      setError(axiosError.response?.data.message || "An error occurred. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="w-[600px] py-14 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-14 rounded shadow-md w-full max-w-lg">
        {/* Job Title Input */}
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Job title
          </label>
          <select
            id="jobTitle"
            className="bg-white border border-gray-300 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          >
            <option value="">Select a job title</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>

        {/* Specialization Dropdown */}
        <div className="relative mb-4">
          <label htmlFor="specialization" className="block text-gray-700 text-sm font-bold mb-2">
            Specialization
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left inline-flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleSpecializationDropdown}
              aria-haspopup="listbox"
              aria-expanded={isSpecializationOpen}
            >
              <span className="block truncate">
                {selectedSpecialization ? selectedSpecialization.name : "Select Specialization"}
              </span>
              <span className="ml-4 flex items-center">
                <MdKeyboardArrowDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    isSpecializationOpen ? "transform rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            <ul
              className={`absolute w-full bg-white border border-gray-200 rounded shadow-lg mt-1 overflow-hidden z-10 ${
                isSpecializationOpen ? "block" : "hidden"
              }`}
            >
              {specializations.map((specialization) => (
                <li
                  key={specialization.name}
                  className="hover:bg-orange-100 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  onClick={() => handleSpecializationSelect(specialization)}
                >
                  {specialization.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Biography Textarea */}
        <div className="mb-4">
          <label htmlFor="biography" className="block text-gray-700 text-sm font-bold mb-2">
            Biography
          </label>
          <textarea
            id="biography"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Enter your biography"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <div className="border border-gray-300 rounded-md p-2">
            <div className="flex flex-wrap">
              {selectedSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center py-1 px-2 mr-2 mt-2 rounded bg-gray-200 text-sm font-medium text-gray-700"
                >
                  <span>{skill.name}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 focus:outline-none hover:text-red-500"
                  >
                    <MdClose className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Search and add skills"
                value={skillSearchTerm}
                onChange={(e) => setSkillSearchTerm(e.target.value)}
                onClick={() => setIsSkillsOpen(true)}
              />
              <ul
                className={`absolute w-full bg-white border border-gray-200 rounded shadow-lg mt-1 overflow-hidden z-10 ${
                  isSkillsOpen ? "block" : "hidden"
                }`}
              >
                {filteredSkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="hover:bg-orange-100 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    onClick={() => handleSkillSelect(skill)}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
        >
          Submit
        </button>

        {/* Display success or error messages */}
        {successMessage && (
          <p className="text-green-500 text-sm mt-2 text-center">{successMessage}</p>
        )}
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignupFormStep2;