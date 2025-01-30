import React from 'react';

interface AddServiceFormProps {
  // You can define props here if needed, e.g., onSubmit handler
}

const AddServiceForm: React.FC<AddServiceFormProps> = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add service</h2>

      <div className="mb-4">
        <label htmlFor="serviceTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Service Title
        </label>
        <input
          type="text"
          id="serviceTitle"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter service title"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="section" className="block text-gray-700 text-sm font-bold mb-2">
            Section
          </label>
          <div className="relative">
            <select
              id="section"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Section 1</option>
              <option>Section 2</option>
              <option>Section 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="subsection" className="block text-gray-700 text-sm font-bold mb-2">
            Subsection
          </label>
          <div className="relative">
            <select
              id="subsection"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Subsection 1</option>
              <option>Subsection 2</option>
              <option>Subsection 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Describe
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Write a brief description of your service..."
        />
      </div>

      <div className="mb-4">
        <label htmlFor="thumbnailPhoto" className="block text-gray-700 text-sm font-bold mb-2">
          Thumbnail photo
        </label>
        <p className="text-orange-500 text-sm mb-2">Upload photo from here</p>
        {/* Placeholder for thumbnail photo upload */}
        <div className="border-dashed border-2 border-gray-400 rounded p-4 text-center">
          <span className="text-gray-500">Drag & drop files here or</span>
          <button className="ml-2 text-orange-500 hover:text-orange-700 font-semibold">Browse</button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="mainPhoto" className="block text-gray-700 text-sm font-bold mb-2">
          Main photo
        </label>
        <p className="text-orange-500 text-sm mb-2">Upload photo from here</p>
        {/* Placeholder for main photo upload */}
        <div className="border-dashed border-2 border-gray-400 rounded p-4 text-center">
          <span className="text-gray-500">Drag & drop files here or</span>
          <button className="ml-2 text-orange-500 hover:text-orange-700 font-semibold">Browse</button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="requiredSkills" className="block text-gray-700 text-sm font-bold mb-2">
          Required skills
        </label>
        <input
          type="text"
          id="requiredSkills"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter required skills"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <div className="relative">
            <select
              id="price"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Fixed price</option>
              <option>Hourly</option>
              <option>Negotiable</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="deliveryDuration" className="block text-gray-700 text-sm font-bold mb-2">
            Delivery duration
          </label>
          <input
            type="text"
            id="deliveryDuration"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., 1 day, 3 days"
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fromDate" className="block text-gray-700 text-sm font-bold mb-2">
            From date
          </label>
          <input
            type="date"
            id="fromDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="toDate" className="block text-gray-700 text-sm font-bold mb-2">
            To date
          </label>
          <input
            type="date"
            id="toDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">
          Link (optional)
        </label>
        <input
          type="text"
          id="link"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter link"
        />
      </div>


      <div className="flex items-center justify-between">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddServiceForm;