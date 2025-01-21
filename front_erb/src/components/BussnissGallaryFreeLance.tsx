import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import {  MdClose } from 'react-icons/md';

type Work = {
  title: string;
  description: string;
  thumbnail: File | null;
  heroImage: File | null;
  completionDate: string;
  link: string;
  skills: string[];
};

interface Skill {
  name: string;
}

const availableSkills: Skill[] = [
  { name: 'Translate' },
  { name: 'Web design' },
  { name: 'Web development' },
  { name: 'Illustrator' },
  { name: 'Photo shop' },
  { name: 'Write articles' },
  { name: 'Graphic design' },
  { name: 'Logo design' },
];

const BusinessGallery: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([
    { title: '', description: '', thumbnail: null, heroImage: null, completionDate: '', link: '', skills: [] },
  ]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [skillSearchTerm, setSkillSearchTerm] = useState('');

  const handleAddWork = () => {
    setWorks([...works, { title: '', description: '', thumbnail: null, heroImage: null, completionDate: '', link: '', skills: [] }]);
  };

  const handleWorkChange = (index: number, field: string, value: any) => {
    const updatedWorks = [...works];
    (updatedWorks[index] as any)[field] = value;
    setWorks(updatedWorks);
  };

  const handleRemoveWork = (index: number) => {
    const updatedWorks = works.filter((_, i) => i !== index);
    setWorks(updatedWorks);
  };

  const handleSkillSelect = (index: number, skill: Skill) => {
    const updatedWorks = [...works];
    if (!updatedWorks[index].skills.includes(skill.name)) {
      updatedWorks[index].skills.push(skill.name);
    }
    setWorks(updatedWorks);
    setSkillSearchTerm('');
    setIsSkillsOpen(false);
  };

  const removeSkill = (index: number, skillName: string) => {
    const updatedWorks = [...works];
    updatedWorks[index].skills = updatedWorks[index].skills.filter((s) => s !== skillName);
    setWorks(updatedWorks);
  };

  const filteredSkills = availableSkills.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearchTerm.toLowerCase())
  );

  const handleSubmit = async () => {
    if (!agreeToTerms) {
      setError('You must agree to the terms.');
      return;
    }

    try {
      const userId = '1'; // Replace with the actual user ID (e.g., from localStorage or context)

      // Send each work to the API
      for (const work of works) {
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('workTitle', work.title);
        formData.append('workDescription', work.description);
        if (work.thumbnail) formData.append('thumbnail', work.thumbnail);
        if (work.heroImage) formData.append('workPhoto', work.heroImage);
        formData.append('completeDate', work.completionDate);
        formData.append('workLink', work.link);
        formData.append('skillsOfWork', work.skills.join(','));

        const response = await axios.post('http://127.0.0.1:8000/api/UserWork', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Work submitted successfully:', response.data);
      }

      setSuccessMessage('All works submitted successfully!');
      setError(null);
    } catch (error: any) {
      console.error('Error submitting works:', error.response.data);
      const axiosError = error as AxiosError<{ message: string }>;
      setError(axiosError.response?.data.message || 'An error occurred. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Build your gallery</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            To add the best format media and your design device if your field or niche is available because each niche will undergo the appropriate niche according the application. <br />
            1- Adhere to the font-done protocol (all text copied in hexadecimal).<br />
            2- Make sure that the words are distinctive and strong quality.<br />
            3- Write a clear title position description that explains the features of the brochure. <br />
            4- Do not submit empty or duplicate works. <br />
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
          {works.map((work, index) => (
            <div key={index} className="mb-8 border p-4 rounded">
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor={`workTitle-${index}`} className="block text-gray-700 font-bold mb-2">
                    Work {index + 1} from {works.length}:
                  </label>
                  {index > 0 && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveWork(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  id={`workTitle-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Work Title"
                  value={work.title}
                  onChange={(e) => handleWorkChange(index, 'title', e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`workDescription-${index}`} className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id={`workDescription-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  placeholder="Description"
                  value={work.description}
                  onChange={(e) => handleWorkChange(index, 'description', e.target.value)}
                ></textarea>
              </div>

              {/* Image Uploads */}
              <div className="mb-4">
                <p className="text-gray-700 font-bold mb-2">Thumbnail photo</p>
                <input
                  type="file"
                  className="mb-2"
                  onChange={(e) => handleWorkChange(index, 'thumbnail', e.target.files?.[0])}
                />

                <p className="text-gray-700 font-bold mb-2">Hero photo</p>
                <input
                  type="file"
                  className="mb-2"
                  onChange={(e) => handleWorkChange(index, 'heroImage', e.target.files?.[0])}
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`completionDate-${index}`} className="block text-gray-700 font-bold mb-2">
                  Completion date
                </label>
                <input
                  type="date"
                  id={`completionDate-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={work.completionDate}
                  onChange={(e) => handleWorkChange(index, 'completionDate', e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`workLink-${index}`} className="block text-gray-700 font-bold mb-2">
                  Link
                </label>
                <input
                  type="text"
                  id={`workLink-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Link"
                  value={work.link}
                  onChange={(e) => handleWorkChange(index, 'link', e.target.value)}
                />
              </div>

              {/* Skills Section */}
              <div className="mb-4">
                <label htmlFor={`workSkills-${index}`} className="block text-gray-700 font-bold mb-2">
                  Skills
                </label>
                <div className="border border-gray-300 rounded-md p-2">
                  <div className="flex flex-wrap">
                    {work.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="inline-flex items-center py-1 px-2 mr-2 mt-2 rounded bg-gray-200 text-sm font-medium text-gray-700"
                      >
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkill(index, skill)}
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
                        isSkillsOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {filteredSkills.map((skill) => (
                        <li
                          key={skill.name}
                          className="hover:bg-orange-100 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                          onClick={() => handleSkillSelect(index, skill)}
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleAddWork}
            type="button"
          >
            Add more works
          </button>
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
          <div className="mb-4 border-t border-gray-200 pt-4">
            <label className="block text-gray-700 font-bold mb-2">Locations terms</label>
            <div className="ml-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">I accord my location by the post those in the authority my position is</span>
              </label>
            </div>
            <div className="ml-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="ml-2 text-sm text-gray-400">I ensure that my post doesn't willed supersede if I see position that could violate the rights of others</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!agreeToTerms}
          >
            Done
          </button>

          {/* Display success or error messages */}
          {successMessage && (
            <p className="text-green-500 text-sm mt-2 text-center">{successMessage}</p>
          )}
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default BusinessGallery;