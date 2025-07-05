"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MultiStepForm from "@/components/MultiStepForm"

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <MultiStepForm />;
  }

  const handleFormClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/917315427/3478733056.svg"
                alt="Mutuelle.fr Logo"
                className="h-12"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="group relative">
                <button className="text-gray-700 hover:text-pink-600 font-medium">
                  TROUVER LA MUTUELLE
                </button>
              </div>
              <div className="group relative">
                <button className="text-gray-700 hover:text-pink-600 font-medium">
                  GUIDE SANTÉ
                </button>
              </div>
              <div className="group relative">
                <button className="text-gray-700 hover:text-pink-600 font-medium">
                  L'INFO UTILE
                </button>
              </div>
              <div className="group relative">
                <button className="text-gray-700 hover:text-pink-600 font-medium">
                  LES OUTILS
                </button>
              </div>
            </nav>

            {/* CTA Button */}
            <Button
              onClick={handleFormClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6"
            >
              📊 COMPARER NOS OFFRES
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[600px]" style={{
        backgroundImage: "url('https://ext.same-assets.com/917315427/1670148805.jpeg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Left Side - Text */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comparez gratuitement<br />
                des devis de complémentaire santé<br />
                en quelques minutes
              </h1>
            </div>

            {/* Right Side - Comparison Form */}
            <div className="bg-white bg-opacity-95 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Je compare les<br />
                Mutuelles Santé pour :
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center hover:bg-pink-50 hover:border-pink-300"
                  onClick={handleFormClick}
                >
                  <div className="text-2xl mb-2">👤</div>
                  <span>Moi</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center hover:bg-pink-50 hover:border-pink-300"
                  onClick={handleFormClick}
                >
                  <div className="text-2xl mb-2">👥</div>
                  <span>Moi et mon conjoint</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center hover:bg-pink-50 hover:border-pink-300"
                  onClick={handleFormClick}
                >
                  <div className="text-2xl mb-2">👨‍👩‍👧</div>
                  <span>Moi et mes enfants</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center hover:bg-pink-50 hover:border-pink-300"
                  onClick={handleFormClick}
                >
                  <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                  <span>Moi, mon conjoint et mes enfants</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Mutuelle.fr interroge pour vous les partenaires qui correspondent à vos besoins de couverture Santé
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            Choisir une mutuelle santé, c'est trouver l'équilibre entre vos cotisations mensuelles, vos remboursements de soins de santé et le reste à charge. Le comparateur de Mutuelle.fr sélectionne pour vous les mutuelles adaptées à votre profil.
          </p>
        </div>
      </section>

      {/* Insurance Company Logos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
            <img src="https://ext.same-assets.com/917315427/4003173481.jpeg" alt="Identités Mutuelle" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/1566198119.png" alt="Mutualia" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/3284342971.png" alt="Santiane" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/4183543527.png" alt="CMON" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/1028118917.png" alt="A comme Assure" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/3683092749.png" alt="France Mutuelle" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/1934688599.png" alt="CNP" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/2153950880.png" alt="April" className="h-12 w-auto mx-auto" />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center mt-8">
            <img src="https://ext.same-assets.com/917315427/745176448.png" alt="Viasante" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/3100928607.jpeg" alt="Miltis" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/2579528056.png" alt="MGC" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/3673462908.png" alt="AESIO" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/4120296900.png" alt="Selfassurance" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/2069670562.png" alt="GSMC" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/405267338.jpeg" alt="Alptis" className="h-12 w-auto mx-auto" />
            <img src="https://ext.same-assets.com/917315427/1059833783.jpeg" alt="Cocoon" className="h-12 w-auto mx-auto" />
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleFormClick}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-bold"
            >
              COMPARER NOS OFFRES
            </Button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Obtenir des devis de mutuelles et assurances santé
              </h2>
              <p className="text-gray-600 mb-6">
                Choisir les garanties pour bien se couvrir peut s'avérer être une tâche difficile lorsque l'on souhaite des remboursements spécifiques sur des postes de santé particuliers, comme par exemple le remboursement des soins dentaires, optiques ou tous les besoins de sa famille.
              </p>
              <p className="text-gray-600 mb-6">
                Grâce à notre outil de comparaison des différentes assurances santé du marché, vous pouvez réaliser simplement et gratuitement une simulation afin d'obtenir les devis de nos mutuelles partenaires.
              </p>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/917315427/2801494493.png"
                alt="Femme souriante"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pourquoi faire confiance au comparateur de Mutuelle.fr ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/917315427/2026248586.png"
                alt="Expert icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Experts en assurance</h3>
              <p className="text-gray-600">
                Depuis 2012, Mutuelle.fr vous accompagne pour faire le bon choix pour votre assurance Santé.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://ext.same-assets.com/917315427/3634853908.png"
                alt="Impartial icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">100 % impartial</h3>
              <p className="text-gray-600">
                Les offres présentées sont classées selon le rapport qualité de prise en charge/prix et de façon impartiale.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://ext.same-assets.com/917315427/1844144399.png"
                alt="Fast icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gratuit, fiable et rapide</h3>
              <p className="text-gray-600">
                Vous comparez en quelques instants des offres qui correspondent à vos souhaits et votre budget.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleFormClick}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-bold"
            >
              COMPARER AVEC MUTUELLE.FR
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Changer de mutuelle santé : obtenez votre devis personnalisé avec notre comparateur mutuelle
          </h2>

          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
            Mutuelle.fr est une plateforme de confiance pour comparer des offres de complémentaire santé individuelle. Nous vous présenterons un comparatif des mutuelles en analysant plusieurs devis de mutuelle santé.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Les étapes de la comparaison de mutuelle :</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 max-w-4xl">
              <li><strong>Remplissez notre formulaire en 3 étapes :</strong> Saisissez vos informations personnelles et vos besoins en matière de santé. C'est en étant le plus fidèle à votre situation que nous pourrons vous proposez la meilleure mutuelle santé pour vous !</li>
              <li><strong>Comparez les Offres :</strong> Obtenez une liste personnalisée de mutuelles correspondant à vos critères. Vous aurez la liberté de comparer les garanties ou redéfinir vos besoins (soins courants, pharmacie, dentaire, optique, hospitalisation, professionnels de la santé, médecine douce ...)</li>
              <li><strong>Choisissez la Meilleure Offre :</strong> Comparez les détails et les prix des différentes mutuelles et choisissez celle qui vous convient le mieux. En fonction de nos assureurs partenaires, vous pourrez recevoir votre simulation de mutuelle par mail ou être contacté par téléphone pour plus d'informations.</li>
            </ol>
          </div>

          <div className="text-center">
            <img
              src="https://ext.same-assets.com/917315427/1668654865.png"
              alt="Exemple de restitution"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6">Utiliser un comparateur de mutuelles santé présente plusieurs avantages :</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 max-w-4xl">
            <li>Économisez sur votre mutuelle en trouvant les meilleures offres</li>
            <li>Comparez rapidement et facilement plusieurs assureurs</li>
            <li>Accédez à des informations détaillées sur chaque contrat de complémentaire santé</li>
            <li>Trouvez la couverture adaptée à vos besoins spécifiques</li>
            <li>Recevez en quelques clics les devis que vous avez sélectionnés</li>
          </ul>

          <div className="text-right mt-4">
            <a href="#" className="text-pink-600 hover:text-pink-700">Fonctionnement du service</a>
          </div>
        </div>
      </section>

      {/* Advice Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Conseils pour choisir sa mutuelle en ligne
          </h2>

          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Comparer les contrats de complémentaires santé n'est pas toujours simple. Mutuelle.fr vous accompagne dans la définition de vos besoins de santé en déterminant quel sera le contrat qui remboursera au mieux vos dépenses non prises en charge par l'Assurance Maladie.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/718664604.webp"
                alt="Senior"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir sa mutuelle senior ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3752102236.webp"
                alt="Jeune"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir une complémentaire santé quand on est jeune ou étudiant ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/1309314569.webp"
                alt="Famille"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir une mutuelle pour toute la famille ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3718884784.webp"
                alt="Travailleur"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment comparer les mutuelles avec le statut de travailleur indépendant non salarié ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/2093827509.webp"
                alt="Dentaire"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir une complémentaire santé qui rembourse correctement les frais dentaires ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3462328179.webp"
                alt="Optique"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir une complémentaire santé qui prend en charge les frais d'optique ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/680382399.webp"
                alt="Hospitalisation"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment être certain d'avoir une bonne prise en charge des frais d'hospitalisation par sa mutuelle ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3567768114.webp"
                alt="Frontaliers"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment sont pris en charge les frais de santé avec une mutuelle dédiée aux travailleurs frontaliers suisses ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/2839293284.webp"
                alt="Protection"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment protéger les personnes sous curatelle ou tutelle avec une mutuelle des majeurs protégés ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/223370340.webp"
                alt="Entreprise"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Comment choisir une mutuelle santé collective performante à ses salariés ?</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Actualités pour comprendre et comparer les Mutuelles Santé
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3171198054.jpeg"
                alt="Augmentation tarifs"
                className="w-32 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Augmentation des tarifs des mutuelles en 2025 : quels impacts pour les Français ?</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/1478308766.jpeg"
                alt="Cartes Vitale"
                className="w-32 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">20 millions de cartes Vitale compromises suite à l'attaque contre l'organisme de tiers-payant Viamedis</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/1993753315.jpeg"
                alt="Hausse primes"
                className="w-32 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Hausse alarmante des primes d'assurance santé en 2024 : ce qu'il faut savoir</h3>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://ext.same-assets.com/917315427/3653445919.png"
                alt="Région Auvergne"
                className="w-32 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">La région Auvergne-Rhône-Alpes lance sa propre mutuelle pour une meilleure couverture santé</h3>
              </div>
            </div>
          </div>

          <div className="text-right mt-8">
            <a href="#" className="text-pink-600 hover:text-pink-700">Toutes les actualités</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comment fonctionne un comparateur de mutuelles ?
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Comment choisir une mutuelle santé adaptée à mes besoins ?
              </summary>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Quel est le prix d'une mutuelle de qualité ?
              </summary>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Comment fonctionne le comparateur de Mutuelle.fr ?
              </summary>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Pourquoi devrais-je utiliser un comparateur en ligne plutôt que de consulter directement les assureurs ?
              </summary>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Pourquoi souscrire une mutuelle ?
              </summary>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="font-bold text-gray-800 cursor-pointer hover:text-pink-600">
                Peut-on utiliser un comparateur de mutuelle pour les seniors ?
              </summary>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/917315427/682898759.png"
                alt="Flower decoration"
                className="w-12 h-12"
              />
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>Mutuelle.fr est une marque de PurConseil, immatriculée auprès de l'Organisme pour le Registre des Intermédiaires en Assurance (ORIAS) en qualité de courtier d'assurance (COA) sous le numéro 12 066 818.</p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-pink-600 space-x-4">
            <a href="#" className="hover:text-pink-700">Qui sommes-nous ?</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Contactez-nous</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Mentions légales</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Plan du site</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">CGU</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Protection des données personnelles</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Fonctionnement du service</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700">Réclamations</a>
          </div>

          <div className="mt-4 text-center text-sm text-pink-600">
            <a href="#" className="hover:text-pink-700">Espace partenaire</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-pink-700">Gérer les cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
