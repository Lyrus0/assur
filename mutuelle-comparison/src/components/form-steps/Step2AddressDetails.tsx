import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StepProps } from '@/types/form';

export default function Step2AddressDetails({ formData, updateFormData, onNext, onPrevious, isValid }: StepProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Adresse de domicile
        </h2>
        <p className="text-lg text-gray-600">
          Votre adresse nous aide à identifier les meilleures offres disponibles dans votre région.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Street Address */}
        <div className="space-y-3">
          <Label htmlFor="street" className="text-lg font-medium text-gray-900">
            Adresse *
          </Label>
          <Input
            id="street"
            type="text"
            value={formData.street}
            onChange={(e) => updateFormData({ street: e.target.value })}
            placeholder="Numéro et nom de rue"
            className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md"
            required
          />
        </div>

        {/* Postal Code */}
        <div className="space-y-3">
          <Label htmlFor="postalCode" className="text-lg font-medium text-gray-900">
            Code postal *
          </Label>
          <Input
            id="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={(e) => updateFormData({ postalCode: e.target.value })}
            placeholder="Code postal (ex: 75001)"
            className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md"
            maxLength={5}
            pattern="[0-9]{5}"
            required
          />
        </div>

        {/* City */}
        <div className="space-y-3">
          <Label htmlFor="city" className="text-lg font-medium text-gray-900">
            Ville *
          </Label>
          <Input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            placeholder="Votre ville"
            className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md"
            required
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
