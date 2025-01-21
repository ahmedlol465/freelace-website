import React, { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const HowYouKnowForm = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const options = [
    { label: 'Search engine' },
    { label: 'Social media'  },
    { label: 'Article on the internet' },
    { label: 'Someone told you' },
    { label: 'Other'},
  ];

  return (
    <div className="my-10  flex justify-center items-center py-10 p-6 rounded-xl w-full min-h-screen">
      <form className="w-full pb-32 max-w-lg bg-white p-8 rounded-lg transform transition-all duration-300 hover:shadow-xl">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          How do you know WorkLink?
        </h2>

        <RadioGroup.Root
          className="grid gap-4"
          value={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
        >
          {options.map((option) => (
            <label
              key={option.label}
              htmlFor={`option-${option.label}`}
              className="group flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors duration-200 cursor-pointer"
            >
              <RadioGroup.Item
                value={option.label}
                id={`option-${option.label}`}
                className="peer disabled:opacity-70 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:outline-none border border-gray-300 rounded-full h-5 w-5 transition-colors duration-200"
              />
              <span className="flex items-center text-lg text-gray-700 peer-disabled:opacity-70">
                {option.label}
              </span>
            </label>
          ))}
        </RadioGroup.Root>
      </form>
    </div>
  );
};

export default HowYouKnowForm;
