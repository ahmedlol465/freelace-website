import React from "react";

interface AddProjectFormProps {
  // You can define props here if needed, e.g., onSubmit handler
}

const AddProjectForm: React.FC<AddProjectFormProps> = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Project</h2>

      <div className="mb-4">
        <label
          htmlFor="projectTitle"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Project Title
        </label>
        <input
          type="text"
          id="projectTitle"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter project title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Describe
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Write a brief description of your project..."
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="photos"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Photos
        </label>
        <p className="text-orange-500 text-sm mb-2">Upload photo from here</p>
        {/* Placeholder for photo upload - can be replaced with actual upload component */}
        <div className="border-dashed border-2 border-gray-400 rounded p-4 text-center">
          <span className="text-gray-500">Drag & drop files here or</span>
          <button className="ml-2 text-orange-500 hover:text-orange-700 font-semibold">
            Browse
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="requiredSkills"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Required skills
        </label>
        <div className="relative">
          <select
            id="requiredSkills"
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Translate</option>
            <option>Web design</option>
            <option>Web development</option>
            <option>Illustrator</option>
            <option>Photo shop</option>
            <option>Write articles</option>
            <option>Graphic design</option>
            <option>Logo design</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="section"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Section
          </label>
          <div className="relative">
            <select
              id="section"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Web development</option>
              <option>Mobile app</option>
              <option>Content management systems</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="subsection"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subsection
          </label>
          <div className="relative">
            <select
              id="subsection"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              //   disabled // Initially disabled, you can enable based on section selection
            >
              <option>Web site</option>
              <option>Mobile app</option>
              <option>Content management systems</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

    <div className="flex justify-center flex-col items-center">
        <div className="">
          <div>
            <div className="mb-4">
              <label
                htmlFor="link"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Link (optional)
              </label>
              <input
                type="text"
                id="link"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter link"
              />
            </div>

            <div>
            <div className="mb-6  w-[180%]">
              <details className="">
                <summary className="text-gray-700 text-sm font-bold cursor-pointer">
                  Advanced setting
                </summary>
                <div className="mt-4 p-4 border rounded border-gray-300">
                  <div className="mb-4">
                    <label
                      htmlFor="projectQuestions"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Project Questions
                    </label>
                    <div className="flex ">
                      <input
                        type="text"
                        id="projectQuestions"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                        placeholder="Add the questions you would like freelancers to answer..."
                      />
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Add the questions
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </details>
            </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Publish
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectForm;
