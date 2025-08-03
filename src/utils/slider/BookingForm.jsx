import React, { useState } from 'react';
import { Calendar, MapPin, Users, Phone, Mail, User, CreditCard, Plane, Mountain, Clock } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    packageType: '',
    startDate: '',
    endDate: '',
    adults: '1',
    children: '0',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    accommodation: '',
    transportation: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const destinations = [
    { value: 'himalaya', label: 'Himalaya Adventure' },
    { value: 'indonesia', label: 'Indonesia Explorer' },
    { value: 'thailand', label: 'Thailand Discovery' }
  ];

  const packages = [
    { value: 'adventure', label: 'Adventure Package', price: '$1,299' },
    { value: 'cultural', label: 'Cultural Journey', price: '$899' },
    { value: 'luxury', label: 'Luxury Experience', price: '$2,499' },
    { value: 'family', label: 'Family Special', price: '$1,599' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    console.log('Booking submitted:', formData);
    alert('Booking request submitted successfully! We will contact you shortly.');
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${currentStep >= step
              ? 'bg-[#2FA8B9] text-white'
              : 'bg-white/20 text-white/60'
            }`}>
            {step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 transition-all duration-300 ${currentStep > step ? 'bg-[#2FA8B9]' : 'bg-white/20'
              }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const InputField = ({ label, name, type = 'text', required = false, children, icon: Icon }) => (
    <div className="space-y-2">
      <label className="block text-[#42a8bb] font-medium text-sm">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#42a8bb] w-5 h-5" />
        )}
        {children || (
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            required={required}
            className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#2FA8B9] focus:ring-2 focus:ring-[#2FA8B9]/20 transition-all duration-300 ${Icon ? 'pl-12' : ''
              }`}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        )}
      </div>
    </div>
  );

  const SelectField = ({ label, name, options, required = false, icon: Icon }) => (
    <div className="space-y-2">
      <label className="block text-[#42a8bb] font-medium text-sm">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#42a8bb] w-5 h-5 z-10" />
        )}
        <select
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
          className={`w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2FA8B9] focus:ring-2 focus:ring-[#2FA8B9]/20 transition-all duration-300 appearance-none ${Icon ? 'pl-12' : ''
            }`}
        >
          <option value="" className="bg-[#001E23] text-white">Select {label.toLowerCase()}</option>
          {options.map(option => (
            <option key={option.value} value={option.value} className="bg-[#001E23] text-white">
              {option.label} {option.price && `- ${option.price}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#d55454] py-12 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2FA8B9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#42a8bb]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2FA8B9]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#42a8bb] text-4xl md:text-6xl font-dancing mb-4">
            Book Your Journey
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light">
            Create memories that last a lifetime
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <StepIndicator />

          <div className="space-y-8">
            {/* Step 1: Trip Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2">Trip Details</h2>
                  <p className="text-white/60">Tell us about your dream destination</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField
                    label="Destination"
                    name="destination"
                    options={destinations}
                    required
                    icon={MapPin}
                  />
                  <SelectField
                    label="Package Type"
                    name="packageType"
                    options={packages}
                    required
                    icon={Mountain}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Start Date"
                    name="startDate"
                    type="date"
                    required
                    icon={Calendar}
                  />
                  <InputField
                    label="End Date"
                    name="endDate"
                    type="date"
                    required
                    icon={Calendar}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Adults" name="adults" type="number" required icon={Users}>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#2FA8B9] focus:ring-2 focus:ring-[#2FA8B9]/20 transition-all duration-300 appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num} className="bg-[#001E23]">{num} Adult{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </InputField>
                  <InputField label="Children" name="children" type="number" icon={Users}>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#2FA8B9] focus:ring-2 focus:ring-[#2FA8B9]/20 transition-all duration-300 appearance-none"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num} className="bg-[#001E23]">{num} Child{num !== 1 ? 'ren' : ''}</option>
                      ))}
                    </select>
                  </InputField>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2">Personal Information</h2>
                  <p className="text-white/60">We need some details to process your booking</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="firstName"
                    required
                    icon={User}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    required
                    icon={User}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    icon={Mail}
                  />
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    required
                    icon={Phone}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField
                    label="Accommodation Preference"
                    name="accommodation"
                    options={[
                      { value: 'standard', label: 'Standard Hotel' },
                      { value: 'deluxe', label: 'Deluxe Hotel' },
                      { value: 'luxury', label: 'Luxury Resort' },
                      { value: 'boutique', label: 'Boutique Hotel' }
                    ]}
                    icon={CreditCard}
                  />
                  <SelectField
                    label="Transportation"
                    name="transportation"
                    options={[
                      { value: 'economy', label: 'Economy Flight' },
                      { value: 'business', label: 'Business Class' },
                      { value: 'first', label: 'First Class' },
                      { value: 'private', label: 'Private Transport' }
                    ]}
                    icon={Plane}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Special Requests & Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2">Final Details</h2>
                  <p className="text-white/60">Any special requests or requirements?</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[#42a8bb] font-medium text-sm">
                      Special Requests or Notes
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#2FA8B9] focus:ring-2 focus:ring-[#2FA8B9]/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about dietary restrictions, accessibility needs, special occasions, or any other preferences..."
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl text-white font-semibold mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-[#42a8bb]" />
                      Booking Summary
                    </h3>
                    <div className="space-y-3 text-white/80">
                      {formData.destination && <p><span className="text-[#42a8bb]">Destination:</span> {destinations.find(d => d.value === formData.destination)?.label}</p>}
                      {formData.packageType && <p><span className="text-[#42a8bb]">Package:</span> {packages.find(p => p.value === formData.packageType)?.label}</p>}
                      {formData.startDate && <p><span className="text-[#42a8bb]">Duration:</span> {formData.startDate} to {formData.endDate}</p>}
                      {formData.adults && <p><span className="text-[#42a8bb]">Travelers:</span> {formData.adults} Adult{formData.adults > 1 ? 's' : ''}{formData.children > 0 ? `, ${formData.children} Child${formData.children > 1 ? 'ren' : ''}` : ''}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${currentStep === 1
                    ? 'bg-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-white/20 text-white hover:bg-white/30 transform hover:scale-105'
                  }`}
              >
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-[#2FA8B9] to-[#42a8bb] text-white font-semibold rounded-lg hover:from-[#42a8bb] hover:to-[#2FA8B9] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-[#2FA8B9] to-[#42a8bb] text-white font-semibold rounded-lg hover:from-[#42a8bb] hover:to-[#2FA8B9] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Booking
                </button>
              )}
            </div>

            {/* Progress Text */}
            <div className="text-center pt-4">
              <p className="text-white/60 text-sm">
                Step {currentStep} of {totalSteps}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-black/60 text-sm">
            Our travel experts will contact you within 24 hours to confirm your booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;