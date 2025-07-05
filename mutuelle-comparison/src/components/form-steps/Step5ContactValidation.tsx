import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { StepProps, CONTACT_METHODS } from '@/types/form';

export default function Step5ContactValidation({ formData, updateFormData, onNext, onPrevious, isValid }: StepProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Contact et finalisation
        </h2>
        <p className="text-lg text-gray-600">
          Dernière étape ! Choisissez comment vous souhaitez être contacté(e) pour recevoir votre devis personnalisé.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Contact Method */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-gray-900">
            Comment préférez-vous être contacté(e) ? *
          </Label>
          <RadioGroup
            value={formData.contactMethod}
            onValueChange={(value) => updateFormData({ contactMethod: value })}
            className="space-y-3"
          >
            {CONTACT_METHODS.map((method) => (
              <div
                key={method.value}
                className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer"
                onClick={() => updateFormData({ contactMethod: method.value })}
              >
                <RadioGroupItem value={method.value} id={`contact-${method.value}`} className="w-5 h-5" />
                <Label htmlFor={`contact-${method.value}`} className="text-lg cursor-pointer flex-1">
                  {method.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Conditional Phone Field */}
        {formData.contactMethod === 'phone' && (
          <div className="space-y-3 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <Label htmlFor="phone" className="text-lg font-medium text-gray-900">
              Numéro de téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              placeholder="Ex: 01 23 45 67 89"
              className="h-12 text-lg border-2 border-blue-300 focus:border-pink-500 rounded-md"
              required
            />
            <p className="text-sm text-blue-700 mt-2">
              Nous vous appellerons pour vous présenter votre devis personnalisé.
            </p>
          </div>
        )}

        {/* Conditional Email Field */}
        {formData.contactMethod === 'email' && (
          <div className="space-y-3 bg-green-50 border border-green-200 rounded-lg p-6">
            <Label htmlFor="email" className="text-lg font-medium text-gray-900">
              Adresse email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email || ''}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="votre.email@exemple.com"
              className="h-12 text-lg border-2 border-green-300 focus:border-pink-500 rounded-md"
              required
            />
            <p className="text-sm text-green-700 mt-2">
              Nous vous enverrons votre devis personnalisé par email dans les plus brefs délais.
            </p>
          </div>
        )}

        {/* Privacy Consent */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-6 border-2 border-gray-200 rounded-lg">
            <Checkbox
              id="privacyConsent"
              checked={formData.privacyConsent}
              onCheckedChange={(checked) => updateFormData({ privacyConsent: Boolean(checked) })}
              className="w-5 h-5 mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="privacyConsent" className="text-lg cursor-pointer leading-relaxed">
                J'accepte que mes données personnelles soient utilisées pour me contacter concernant mon devis d'assurance. *
              </Label>
              <p className="text-sm text-gray-600 mt-2">
                Vos données sont sécurisées et ne seront jamais transmises à des tiers sans votre consentement explicite.
              </p>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Vos données sont sécurisées et protégées</h4>
              <p className="text-gray-600 text-sm">
                Nous utilisons un cryptage SSL et respectons le RGPD pour protéger vos informations personnelles.
              </p>
            </div>
          </div>
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
          Découvrir ma réduction
        </Button>
      </div>
    </div>
  );
}
