// // import React, { useState } from 'react';

// // interface FormState {
// //   username: string;
// //   accountType: 'freelancer' | 'project_owner' | 'company' | null;
// //   termsAgreed: boolean;
// // }

// // interface FormErrors {
// //     username: string | null;
// //     accountType: string | null;
// //     termsAgreed: string | null;
// //   }

// // const AccountData: React.FC = () => {
// //     const [form, setForm] = useState<FormState>({
// //         username: '',
// //         accountType: null,
// //         termsAgreed: false
// //       });
// //       const [errors, setErrors] = useState<FormErrors>({
// //           username: null,
// //           accountType: null,
// //           termsAgreed: null
// //       });

// //     // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     //     const { name, value, type, checked } = e.target;

// //     //     setForm(prevForm => ({
// //     //       ...prevForm,
// //     //       [name]: type === 'checkbox' ? checked : value,
// //     //     }));
// //     //   };
// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //         const target = e.target;
// //         const { name, value, type } = target;
// //         const checked = (target as HTMLInputElement).checked;
      
// //         setForm(prevForm => ({
// //           ...prevForm,
// //           [name]: type === 'checkbox' ? checked : value,
// //         }));
// //       };

// //   const validateForm = (): boolean => {
// //     let isValid = true;
// //     const newErrors: FormErrors = {
// //       username: null,
// //       accountType: null,
// //       termsAgreed: null
// //     };

// //     if (!form.username.trim()) {
// //       newErrors.username = "Username is required";
// //       isValid = false;
// //     } else if(form.username.length < 4){
// //         newErrors.username = "At least 4 characters required";
// //         isValid = false;
// //     }
    
// //     if (!form.accountType) {
// //         newErrors.accountType = "An account type is required";
// //         isValid = false;
// //     }

// //     if (!form.termsAgreed) {
// //       newErrors.termsAgreed = "You must agree to the terms of use";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if(validateForm()){
// //          console.log("Form submitted:", form);
// //          // Here you'd do the form submission, e.g., API call
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md bg-white shadow-md w-full max-w-lg">
// //       {/* User Name */}
// //       <div className="mb-4">
// //         <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
// //           User name
// //         </label>
// //         <input
// //           type="text"
// //           id="username"
// //           name="username"
// //           value={form.username}
// //           onChange={handleChange}
// //           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
// //         />
// //             {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
// //             <p className="text-xs text-gray-500">it must be unique and composed of english letters and numbers only with underscores (_), allowed between them. it cannot be changed later.</p>
// //       </div>

// //       {/* Account Type */}
// //       <div className="mb-4">
// //         <label className="block text-gray-700 text-sm font-bold mb-2">
// //           Account type
// //         </label>
// //         <div className="space-y-2">
// //           <div className="flex items-center">
// //             <input
// //               type="radio"
// //               id="freelancer"
// //               name="accountType"
// //               value="freelancer"
// //               checked={form.accountType === 'freelancer'}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             <label htmlFor="freelancer" className="text-gray-700">
// //               Freelancer
// //               <span className="block text-xs text-gray-500">(Services seller / Project Implementer)</span>
// //             </label>
// //           </div>
// //           <div className="flex items-center">
// //             <input
// //               type="radio"
// //               id="project_owner"
// //               name="accountType"
// //               value="project_owner"
// //               checked={form.accountType === 'project_owner'}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             <label htmlFor="project_owner" className="text-gray-700">
// //               Project owner
// //               <span className="block text-xs text-gray-500">(Project owner / Services buyer)</span>
// //             </label>
// //           </div>
// //           <div className="flex items-center border border-gray-300">
// //             <input
// //               type="radio"
// //               id="company"
// //               name="accountType"
// //               value="company"
// //               disabled
// //               checked={form.accountType === 'company'}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             <label htmlFor="company" className="text-gray-700">
// //               Company
// //               <span className="block text-xs text-gray-500">(Remote Hiring of Freelancers)</span>
// //             </label>
// //           </div>
// //         </div>
// //         {errors.accountType && <p className="text-red-500 text-xs italic">{errors.accountType}</p>}
// //       </div>

// //       {/* Terms of Use */}
// //       <div className="mb-4 flex items-center">
// //         <input
// //           type="checkbox"
// //           id="termsAgreed"
// //           name="termsAgreed"
// //           checked={form.termsAgreed}
// //           onChange={handleChange}
// //           className="mr-2"
// //         />
// //         <label htmlFor="termsAgreed" className="text-gray-700">
// //           I have read and agree to <a href="/terms" className="text-orange-500">terms of use</a> and <a href="/privacy" className="text-orange-500">Privacy Statement</a>
// //         </label>
// //         {errors.termsAgreed && <p className="text-red-500 text-xs italic">{errors.termsAgreed}</p>}
// //       </div>

// //       {/* Next Button */}
// //       <button
// //         type="submit"
// //         className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// //       >
// //         Next
// //       </button>
// //     </form>
// //   );
// // };

// // export default AccountData;


// import React, { useState } from 'react';

// interface Step {
//   id: number;
//   label: string;
// }

// const steps: Step[] = [
//   { id: 1, label: 'Account data' },
//   { id: 2, label: 'Profile' },
//   { id: 3, label: 'Business gallery' },
// ];

// const accountTypes = [
//     { label: 'Freelancer', value: 'freelancer', subLabel: '(services seller / Project implementer)' },
//     { label: 'Project owner', value: 'project_owner', subLabel: '(Project owner / services buyer)' },
//     { label: 'Company', value: 'company', subLabel: '(remote hiring of Freelancers)' },
// ];



// const AccountData: React.FC = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [username, setUsername] = useState('');
//     const [accountType, setAccountType] = useState('project_owner');
//     const [agreement, setAgreement] = useState(false);
//     const [usernameError, setUsernameError] = useState('');




//     const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newUsername = e.target.value;
//         setUsername(newUsername);

//         if(newUsername.length < 3){
//             setUsernameError("Username is at least 3 characters");
//         }else {
//             setUsernameError("");
//         }

//     };


//   return (

//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
//         {/* Progress Bar */}
//         <div className="mb-4"> {/* Added margin-bottom */}
//             {/* ... progress bar code ... (same as before) */}
//         </div>    

//         <h1 className="text-2xl font-semibold text-gray-800 mb-4">Hello samy</h1> {/* Added margin-bottom */}


//         <div className="mb-4"> {/* User name input */}
//           <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
//             User name
//           </label>
//           <div className="relative"> {/* Added relative for positioning error message */}
//                 <input
//                   type="text"
//                   id="username"
//                   className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
//                         ${usernameError ? 'border-red-500' : ''}`} // Conditional border color
//                   placeholder="Enter your username"
//                   value={username}
//                   onChange={handleUsernameChange}
//                 />
//                  {/* Error message (conditionally rendered) */}
//               {usernameError && (
//                     <p className="text-red-500 text-xs italic mt-1 absolute -bottom-5 left-0">
//                     {usernameError}
//                     </p>
//             )}
//               <p className="mt-2 text-xs text-gray-500">
//                   It must be only in english comprised of english letters and numbers only, with underscore allowed.
//                   It is defined between them. It cannot be changed later.
//                   At least 3 characters.
//               </p>
//           </div>

//         </div>

//         {/* Account Type Radio Buttons */}
//         <div className="mb-6">  {/* Added margin-bottom */}
//           <label className="block text-gray-700 text-sm font-bold mb-2">Account type</label>
//           {accountTypes.map((type) => (
//                 <div key={type.value} className="flex items-center mb-2">
//                     <input
//                       id={type.value}
//                       type="radio"
//                       name="accountType"
//                       value={type.value}
//                       checked={accountType === type.value}
//                       onChange={() => setAccountType(type.value)}
//                       className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                     />
//                     <label htmlFor={type.value} className="ml-3 block text-sm leading-5 font-medium text-gray-700">
//                       {type.label}
//                         <span className="mt-1 text-xs text-gray-500 block">{type.subLabel}</span>
//                     </label>
//                 </div>
//             ))}

//         </div>

//         {/* Agreement Checkbox */}

//         <div className="mb-4"> {/* Added margin-bottom */}
//            <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox text-blue-600"
//                   checked={agreement}
//                   onChange={() => setAgreement(!agreement)}
//                 />
//                <span className="ml-2 text-gray-700">
//                  I have read and agree to <a href="#" className="text-blue-600 underline">terms of use</a> and <a href="#" className="text-blue-600 underline">Privacy Statement</a>
//                </span>
//              </label>
//         </div>




       

//       </div>
//     </div>
//   );
// };


// export default AccountData;








import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { set } from 'react-hook-form';


interface AccountDataProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
interface FormState {
  username: string;
  accountType: 'freelancer' | 'project_owner' | 'company';
  termsAgreed: boolean;
}

const AccountData: React.FC<AccountDataProps> = ({setCurrentStep}: any) => {
  const [form, setForm] = useState<FormState>({
    username: '',
    accountType: 'freelancer',
    termsAgreed: false,
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [error, setError] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!form.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (form.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!form.termsAgreed) {
      newErrors.termsAgreed = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const basicUserInfo = JSON.parse(localStorage.getItem('basicUserInfo') || '{}');
        const {  username: userName, accountType } = form
        const fullData = { ...basicUserInfo, userName, accountType  };

        
        const response = await axios.post('http://127.0.0.1:8000/api/register', fullData);

        localStorage.setItem('currentStep', '2');
        
        localStorage.setItem('token', response.data.token);
        localStorage.removeItem("basicUserInfo");
        setCurrentStep(2)

      } catch (err: any) {        
        if (err.response) {
          setError(err.response.data.message);
          console.error('Login failed:', err.response.data);          
          
        } else if (err.request) {
          console.error('Login failed: No response received', err.request);
          setError('No response received from the server.');
        } else {
          
          console.error('Login failed:', err.message);
          setError('An error occurred. Please try again later.');
        }
      }
    }
  };


  
  return (
    <div className="my-20 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Complete Your Registration</h1>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.username ? 'border-red-500' : ''
            }`}
          />
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Account Type</label>
          <div className="space-y-2">
            {['freelancer', 'project_owner', 'company'].map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="radio"
                  id={type}
                  name="accountType"
                  value={type}
                  checked={form.accountType === type}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={type} className="text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="termsAgreed"
              checked={form.termsAgreed}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700">
              I agree to the <a href="#" className="text-blue-500">terms of use</a> and{' '}
              <a href="#" className="text-blue-500">privacy policy</a>
            </span>
          </label>
          {errors.termsAgreed && <p className="text-red-500 text-xs italic">You must agree to the terms</p>}
        </div>

        { Object.keys(error).length != 0  && <div className="text-red-500">{error.toString()}</div>}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
        >
          Complete Registration
        </button>
      </div>
    </div>
  );
};

export default AccountData;