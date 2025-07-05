"use client";

import { useState } from 'react';
import { User, MapPin, Briefcase, FileText, Phone } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { FormData } from '@/types/form';
import Step1PersonalInfo from './form-steps/Step1PersonalInfo';
import Step2AddressDetails from './form-steps/Step2AddressDetails';
import Step3ProfessionalStatus from './form-steps/Step3ProfessionalStatus';
import Step4CurrentInsurance from './form-steps/Step4CurrentInsurance';
import Step5ContactValidation from './form-steps/Step5ContactValidation';
import LoadingScreen from './form-steps/LoadingScreen';
import SuccessScreen from './form-steps/SuccessScreen';

const STEPS = [
  { icon: User, title: 'Informations personnelles', description: 'Vos coordonnées' },
  { icon: MapPin, title: 'Adresse', description: 'Votre domicile' },
  { icon: Briefcase, title: 'Statut professionnel', description: 'Votre situation' },
  { icon: FileText, title: 'Assurance actuelle', description: 'Votre couverture' },
  { icon: Phone, title: 'Contact', description: 'Finalisation' },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    ageRange: '',
    street: '',
    postalCode: '',
    city: '',
    professionalStatus: '',
    currentInsurer: '',
    insuranceType: '',
    hasMutuelle: '',
    changeInterest: '',
    changeReason: '',
    contactMethod: '',
    phone: '',
    email: '',
    privacyConsent: false,
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.ageRange);
      case 2:
        return !!(formData.street && formData.postalCode && formData.city);
      case 3:
        return !!formData.professionalStatus;
      case 4:
        return !!(formData.currentInsurer && formData.insuranceType && formData.hasMutuelle && formData.changeInterest);
      case 5:
        const contactValid = formData.contactMethod &&
          ((formData.contactMethod === 'phone' && formData.phone) ||
           (formData.contactMethod === 'email' && formData.email));
        return !!(contactValid && formData.privacyConsent);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 8000));

    // Generate random discount between 20-50%
    const discount = Math.floor(Math.random() * 31) + 20;
    setDiscountPercentage(discount);

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const progressPercentage = (currentStep / 5) * 100;

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isSubmitted) {
    return <SuccessScreen discountPercentage={discountPercentage} />;
  }

  const renderStep = () => {
    const stepProps = {
      formData,
      updateFormData,
      onNext: handleNext,
      onPrevious: handlePrevious,
      isValid: validateStep(currentStep),
    };

    switch (currentStep) {
      case 1:
        return <Step1PersonalInfo {...stepProps} />;
      case 2:
        return <Step2AddressDetails {...stepProps} />;
      case 3:
        return <Step3ProfessionalStatus {...stepProps} />;
      case 4:
        return <Step4CurrentInsurance {...stepProps} />;
      case 5:
        return <Step5ContactValidation {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparateur d'Assurance Senior
          </h1>
          <p className="text-xl text-gray-600">
            Trouvez la meilleure offre adaptée à vos besoins
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Étape {currentStep} sur 5
              </span>
              <span className="text-lg text-gray-600">
                {Math.round(progressPercentage)}% complété
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between items-center">
            {STEPS.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;
              const Icon = step.icon;

              return (
                <div
                  key={stepNumber}
                  className={`flex flex-col items-center text-center ${
                    stepNumber <= currentStep ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 ${
                      isCompleted
                        ? 'bg-green-500 border-green-500 text-white'
                        : isActive
                        ? 'bg-pink-500 border-pink-500 text-white'
                        : 'bg-gray-100 border-gray-300 text-gray-500'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="max-w-20">
                    <div className="text-sm font-medium text-gray-900">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm border">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
