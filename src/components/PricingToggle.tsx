import { useState } from 'react';

const APP_URL = import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:3000';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 19990,
    description: 'Perfecto para comenzar tu operación FLEX.',
    features: [
      'Hasta 50 paquetes por día',
      'Hasta 10 clientes activos',
      'Hasta 10 repartidores activos',
      'Dashboard de operación diaria',
      'Soporte por email',
    ],
    cta: 'Empezar con Basic',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 49990,
    description: 'Para operadores que ya escalan su volumen.',
    features: [
      'Hasta 250 paquetes por día',
      'Hasta 50 clientes activos',
      'Hasta 50 repartidores activos',
      'Reportes semanales y mensuales',
      'Soporte prioritario (24h)',
    ],
    cta: 'Empezar con Pro',
    highlighted: true,
  },
  {
    name: 'Premium',
    monthlyPrice: 99990,
    description: 'Operación sin límites para grandes operadores.',
    features: [
      'Paquetes ilimitados por día',
      'Hasta 200 clientes activos',
      'Hasta 200 repartidores activos',
      'Pick UP delivery',
      'Soporte dedicado',
    ],
    cta: 'Empezar con Premium',
    highlighted: false,
  },
];

export default function PricingToggle() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-8 transition-all ${
            plan.highlighted
              ? 'border-amber-500/60 bg-neutral-900 shadow-lg shadow-amber-500/10'
              : 'border-neutral-800 bg-neutral-900/50'
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold text-neutral-900">
              Más popular
            </div>
          )}

          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          <p className="mt-1 text-sm text-gray-400">{plan.description}</p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              ${plan.monthlyPrice.toLocaleString('es-CL')}
            </span>
            <span className="text-sm text-gray-400">CLP / mes</span>
          </div>

          <a
            href={`${APP_URL}/setup`}
            className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
              plan.highlighted
                ? 'bg-amber-500 text-neutral-900 hover:bg-amber-600'
                : 'border border-neutral-700 text-white hover:border-gray-500 hover:bg-neutral-800'
            }`}
          >
            {plan.cta}
          </a>

          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
