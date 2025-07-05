import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StepProps, AGE_RANGES } from '@/types/form';

export default function Step1PersonalInfo({ formData, updateFormData, onNext, isValid }: StepProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Informations personnelles
        </h2>
        <p className="text-lg text-gray-600">
          Commençons par vos informations de base pour personnaliser votre devis.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* First Name */}
        <div className="space-y-3">
          <Label htmlFor="firstName" className="text-lg font-medium text-gray-900">
            Prénom *
          </Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Votre prénom"
            className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md"
            required
          />
        </div>

        {/* Last Name */}
        <div className="space-y-3">
          <Label htmlFor="lastName" className="text-lg font-medium text-gray-900">
            Nom de famille *
          </Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            placeholder="Votre nom de famille"
            className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md"
            required
          />
        </div>

        {/* Age Range */}
        <div className="space-y-3">
          <Label htmlFor="ageRange" className="text-lg font-medium text-gray-900">
            Tranche d'âge *
          </Label>
          <Select value={formData.ageRange} onValueChange={(value) => updateFormData({ ageRange: value })}>
            <SelectTrigger className="h-12 text-lg border-2 border-gray-300 focus:border-pink-500 rounded-md">
              <SelectValue placeholder="Sélectionnez votre tranche d'âge" />
            </SelectTrigger>
            <SelectContent>
              {AGE_RANGES.map((range) => (
                <SelectItem key={range.value} value={range.value} className="text-lg py-3">
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
        <div></div>
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
