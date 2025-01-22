import React, { useState } from "react";
import AccountData from "../components/AcountSetup/AccountData";
import HowYouKnowForm from "../components/AcountSetup/TellAboutYourSelf";
import SignupFormStep2 from "../components/AcountSetup/Profile";
import { FaCheckCircle } from "react-icons/fa";
import AccountActivated from "../components/Succus";

const AccountSetup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(
    parseInt(localStorage.getItem("currentStep") || "1")
  );
  console.log(currentStep);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    localStorage.setItem("currentStep", currentStep.toString());
  };

  //   const renderStepContent = () => {
  //     switch (currentStep) {
  //       case 1:
  //         return <AccountData onNext={handleNext} />;
  //       case 2:
  //         return <SignupFormStep2 onNext={handleNext} />;
  //       case 3:
  //         return <HowYouKnowForm onNext={handleNext} />;
  //       default:
  //         return null; // Or a "Thank you" message
  //     }
  //   };

  const steps = [
    { label: "Account Data" },
    { label: "Profile" },
    { label: "Tell Us About Yourself" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      {/* Added min-height for better layout */}
      <div className="container mx-auto px-4 py-16">
        {/* Progress Bar */}
        <div className="">
          {" "}
          {/* Added margin for spacing */}
          <div className="flex items-center relative">
            <div className="flex-grow border-t-2 border-green-500 mx-10"></div>
            <div className="flex justify-between w-full absolute top-0 left-0 -mt-3">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2  border-green-500 flex items-center justify-center font-bold text-lg
                                        ${
                                          index + 1 < currentStep
                                            ? "bg-green-500 text-white"
                                            : index + 1 === currentStep
                                            ? "bg-white text-green-600"
                                            : "text-green-500"
                                        }
                                         `}
                  >
                    {index + 1 < currentStep ? (
                      <FaCheckCircle className="w-5 h-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      index + 1 <= currentStep
                        ? "font-bold text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Render the appropriate component based on currentStep */}
        {/* {renderStepContent()} */}
        <div className=" flex justify-center w-full">
          <div>
            <div>
              {currentStep === 1 && (
                <AccountData setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 2 && (
                <SignupFormStep2 setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 3 && <HowYouKnowForm />}
              {currentStep > 3 && <AccountActivated />}
            </div>
            <div className=" flex justify-center mt-[-150px]">
              {currentStep < 4 && currentStep > 2 ? (
                <button
                  onClick={handleNext}
                  className="  bg-orange-500 w-[50%] hover:bg-orange-600 text-white font-semibold py-3 px-12 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
                  type="button" // Change to "submit" if you want to submit the form
                >
                  Next
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
