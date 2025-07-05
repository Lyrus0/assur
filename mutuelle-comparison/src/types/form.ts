export interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  ageRange: string;

  // Step 2: Address Details
  street: string;
  postalCode: string;
  city: string;

  // Step 3: Professional Status
  professionalStatus: string;

  // Step 4: Current Insurance
  currentInsurer: string;
  insuranceType: string;
  hasMutuelle: string;
  changeInterest: string;
  changeReason?: string;

  // Step 5: Contact & Validation
  contactMethod: string;
  phone?: string;
  email?: string;
  privacyConsent: boolean;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
  isValid: boolean;
}

export const AGE_RANGES = [
  { value: '50-55', label: '50-55 ans' },
  { value: '56-60', label: '56-60 ans' },
  { value: '61-65', label: '61-65 ans' },
  { value: '66-70', label: '66-70 ans' },
  { value: '71-75', label: '71-75 ans' },
  { value: '76-80', label: '76-80 ans' },
  { value: '80+', label: '80 ans et plus' },
];

export const INSURANCE_COMPANIES = [
  'Groupe Vyv',
  'Malakoff Humanis',
  'Aésio',
  'La Mutuelle générale',
  'Apicil',
  'Viasanté Mutuelle',
  'Solimut',
  'Klésia',
  'Mut\'Mutualia',
  'Apivia',
  'Groupama',
  'AG2R La Mondiale',
  'Covéa',
  'Allianz France',
  'AXA France',
  'Pro BTP',
  'Autre'
];

export const CONTACT_METHODS = [
  { value: 'phone', label: 'Par téléphone' },
  { value: 'email', label: 'Par email' },
];

export const PROFESSIONAL_STATUS = [
  { value: 'employed', label: 'En activité' },
  { value: 'retired', label: 'Retraité(e)' },
];

export const INSURANCE_TYPES = [
  'Complémentaire santé individuelle',
  'Mutuelle d\'entreprise',
  'Assurance maladie obligatoire',
  'Autre'
];

export const MUTUELLE_STATUS = [
  { value: 'yes', label: 'Oui' },
  { value: 'no', label: 'Non' },
];

export const CHANGE_INTEREST = [
  { value: 'very-interested', label: 'Très intéressé(e)' },
  { value: 'interested', label: 'Intéressé(e)' },
  { value: 'not-sure', label: 'Pas sûr(e)' },
  { value: 'not-interested', label: 'Pas intéressé(e)' },
];
