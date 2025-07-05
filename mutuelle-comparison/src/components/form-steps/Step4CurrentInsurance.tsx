import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { StepProps, INSURANCE_COMPANIES, INSURANCE_TYPES, MUTUELLE_STATUS, CHANGE_INTEREST } from '@/types/form';

export default function Step4CurrentInsurance({ formData, updateFormData, onNext, onPrevious, isValid }: StepProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Votre assurance actuelle
        </h2>
        <p className="text-lg text-gray-600">
          Ces informations nous permettent de comparer votre situation actuelle avec les meilleures offres disponibles.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Current Insurer */}
        <div className="space-y-3">
          <Label htmlFor="currentInsurer" className="text-lg font-medium text-gray-900">
            Votre assureur actuel *
          </Label>
          <Select value={formData.currentInsurer} onValueChange={(value) => updateFormData({ currentInsurer: value })}>
            <SelectTrigger className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md">
              <SelectValue placeholder="Sélectionnez votre assureur" />
            </SelectTrigger>
            <SelectContent>
              {INSURANCE_COMPANIES.map((company) => (
                <SelectItem key={company} value={company} className="text-lg py-3">
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Insurance Type */}
        <div className="space-y-3">
          <Label htmlFor="insuranceType" className="text-lg font-medium text-gray-900">
            Type d'assurance *
          </Label>
          <Select value={formData.insuranceType} onValueChange={(value) => updateFormData({ insuranceType: value })}>
            <SelectTrigger className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md">
              <SelectValue placeholder="Sélectionnez le type d'assurance" />
            </SelectTrigger>
            <SelectContent>
              {INSURANCE_TYPES.map((type) => (
                <SelectItem key={type} value={type} className="text-lg py-3">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Has Mutuelle */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-gray-900">
            Avez-vous une mutuelle complémentaire ? *
          </Label>
          <RadioGroup
            value={formData.hasMutuelle}
            onValueChange={(value) => updateFormData({ hasMutuelle: value })}
            className="space-y-3"
          >
            {MUTUELLE_STATUS.map((status) => (
              <div
                key={status.value}
                className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer"
                onClick={() => updateFormData({ hasMutuelle: status.value })}
              >
                <RadioGroupItem value={status.value} id={`mutuelle-${status.value}`} className="w-5 h-5" />
                <Label htmlFor={`mutuelle-${status.value}`} className="text-lg cursor-pointer flex-1">
                  {status.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Change Interest */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-gray-900">
            À quel point êtes-vous intéressé(e) par un changement d'assurance ? *
          </Label>
          <RadioGroup
            value={formData.changeInterest}
            onValueChange={(value) => updateFormData({ changeInterest: value })}
            className="space-y-3"
          >
            {CHANGE_INTEREST.map((interest) => (
              <div
                key={interest.value}
                className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer"
                onClick={() => updateFormData({ changeInterest: interest.value })}
              >
                <RadioGroupItem value={interest.value} id={`interest-${interest.value}`} className="w-5 h-5" />
                <Label htmlFor={`interest-${interest.value}`} className="text-lg cursor-pointer flex-1">
                  {interest.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Optional Reason */}
        <div className="space-y-3">
          <Label htmlFor="changeReason" className="text-lg font-medium text-gray-900">
            Raison principale du changement (optionnel)
          </Label>
          <Textarea
            id="changeReason"
            value={formData.changeReason || ''}
            onChange={(e) => updateFormData({ changeReason: e.target.value })}
            placeholder="Décrivez brièvement pourquoi vous souhaitez changer d'assurance..."
            className="min-h-24 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md resize-none"
            rows={3}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
        <Button
          onClick={onPrevious}
          variant="outline"
          className="h-12 px-8 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50"
        >
          Précédent
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid}
          className="h-12 px-8 text-lg font-semibold bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
