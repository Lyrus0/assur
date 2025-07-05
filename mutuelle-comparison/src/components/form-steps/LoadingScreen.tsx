"use client";

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        {/* Spinner */}
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Génération de votre promotion{dots}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous analysons votre profil et comparons plus de 100 offres d'assurance pour vous proposer la meilleure réduction possible.
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1.4s'
              }}
            ></div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-900">Processus sécurisé</span>
          </div>
          <p className="text-gray-600">
            Vos données sont protégées et le processus est entièrement gratuit et sans engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
