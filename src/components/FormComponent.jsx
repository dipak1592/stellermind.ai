import { useState } from 'react';

const FormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    projectDescription: '',
    budget: '',
  });

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePrevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement submission logic here, e.g., API call
  };

  return (
    <div className="flex text-white flex-row justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        {currentStep === 1 && (
          <div>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            <input type="text" name="businessName" placeholder="Your Business Name" onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <textarea name="projectDescription" placeholder="Describe your project briefly" onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
            <select name="budget" onChange={handleChange} className="select select-bordered w-full max-w-xs">
              <option disabled selected>Select budget</option>
              <option value="2500-5000">$2,500 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            {/* Schedule Meeting Fields Here */}
            <p>Ready to submit your information.</p>
          </div>
        )}

        <div className="flex space-x-2">
          {currentStep > 1 && <button type="button" onClick={handlePrevStep} className="btn">Back</button>}
          {currentStep < 3 && <button type="button" onClick={handleNextStep} className="btn">Next</button>}
          {currentStep === 3 && <button type="submit" className="btn">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
