import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StepProps, PROFESSIONAL_STATUS } from '@/types/form';

export default function Step3ProfessionalStatus({ formData, updateFormData, onNext, onPrevious, isValid }: StepProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Statut professionnel
        </h2>
        <p className="text-lg text-gray-600">
          Votre situation professionnelle nous aide à déterminer les options d'assurance les plus appropriées.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        <div className="space-y-4">
          <Label className="text-lg font-medium text-gray-900">
            Quelle est votre situation professionnelle actuelle ? *
          </Label>
          <RadioGroup
            value={formData.professionalStatus}
            onValueChange={(value) => updateFormData({ professionalStatus: value })}
            className="space-y-4"
          >
            {PROFESSIONAL_STATUS.map((status) => (
              <div
                key={status.value}
                className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer"
                onClick={() => updateFormData({ professionalStatus: status.value })}
              >
                <RadioGroupItem value={status.value} id={status.value} className="w-5 h-5" />
                <Label htmlFor={status.value} className="text-lg cursor-pointer flex-1">
                  {status.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {formData.professionalStatus === 'retired' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Information pour les retraités</h4>
                <p className="text-blue-800">
                  En tant que retraité(e), vous pourriez bénéficier de tarifs préférentiels et d'offres spécialement conçues pour votre situation.
                </p>
              </div>
            </div>
          </div>
        )}

        {formData.professionalStatus === 'employed' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Information pour les actifs</h4>
                <p className="text-green-800">
                  En tant qu'actif, nous comparerons les offres individuelles avec votre mutuelle d'entreprise actuelle pour vous proposer la meilleure solution.
                </p>
              </div>
            </div>
          </div>
        )}
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
