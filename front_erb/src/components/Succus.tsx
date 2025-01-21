import success from '../assets/pana.png'
const AccountActivated = () => {
  localStorage.removeItem("currentStep")
  return (
    <div className="my-32 mt-14 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="border rounded-md mb-6">
        <img
          src={success} // Replace with the actual path to your image
          alt="Account Activated"
          className="w-full h-[50vh]" // Or specify fixed dimensions if needed
        />
      </div>


      <p className="text-center text-sm text-gray-700 mb-6">
        Your account has been successfully activated! You can start working
      </p>

      <div className="flex items-center justify-center">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          type="button" 
        >
          Add your project
        </button>
      </div>
    </div>
  );
};

export default AccountActivated;