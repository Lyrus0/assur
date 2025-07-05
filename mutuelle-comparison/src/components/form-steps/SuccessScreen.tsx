interface SuccessScreenProps {
  discountPercentage: number;
}

export default function SuccessScreen({ discountPercentage }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Success Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Félicitations !
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Votre demande a été traitée avec succès. Voici votre réduction personnalisée :
          </p>
        </div>

        {/* Discount Display */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-pink-200 p-12 mb-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-pink-600 mb-4">
              -{discountPercentage}%
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Réduction exclusive
            </h2>
            <p className="text-lg text-gray-600">
              sur votre nouvelle assurance santé
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Prochaines étapes
          </h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Contact personnalisé</h4>
                <p className="text-blue-800">
                  <strong>Nous vous appellerons demain</strong> pour vous présenter les meilleures offres correspondant à votre profil.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Comparaison détaillée</h4>
                <p className="text-blue-800">
                  Nous comparerons votre situation actuelle avec les meilleures offres du marché.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Accompagnement gratuit</h4>
                <p className="text-blue-800">
                  Notre équipe vous accompagne gratuitement dans toutes vos démarches de changement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security and Trust */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">100% Gratuit</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Notre service de comparaison est entièrement gratuit et sans engagement.
            </p>
          </div>
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Données sécurisées</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Vos données sont sécurisées et protégées selon les normes RGPD.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Questions ?</h4>
          <p className="text-gray-600 mb-4">
            Notre équipe d'experts est disponible pour répondre à toutes vos questions.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <span>📞 01 234 567 89</span>
            <span>📧 contact@mutuelle-senior.fr</span>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <button
            onClick={() => window.location.reload()}
            className="text-pink-600 hover:text-pink-700 font-medium text-lg"
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
