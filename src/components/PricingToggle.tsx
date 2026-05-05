import { useState } from 'react';

const APP_URL = 'https://movipack.app';

const plans = [
  {
    name: 'Gratis',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Para empezar a ordenar tu operacion',
    features: [
      'Hasta 30 paquetes/dia',
      '1 usuario',
      '1 delivery',
      'Dashboard basico',
      'Soporte por email',
    ],
    cta: 'Empieza gratis',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: 'Para operaciones que crecen',
    features: [
      'Paquetes ilimitados',
      'Hasta 5 usuarios',
      'Hasta 10 deliverys',
      'Reporteria completa',
      'Exportar a Excel y PDF',
      'Soporte prioritario',
    ],
    cta: 'Comenzar con Pro',
    highlighted: true,
  },
  {
    name: 'Business',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'Para operaciones multi-sucursal',
    features: [
      'Todo lo de Pro',
      'Usuarios ilimitados',
      'Multi-sucursal',
      'API de integracion',
      'Soporte dedicado',
      'Onboarding personalizado',
    ],
    cta: 'Contactar ventas',
    highlighted: false,
  },
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
          Mensual
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
            isYearly ? 'bg-amber-500' : 'bg-neutral-700'
          }`}
          aria-label="Cambiar entre precio mensual y anual"
        >
          <span
            className={`inline-block h-5 w-5 rounded-full bg-white transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
          Anual
        </span>
        {isYearly && (
          <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
            Ahorra 20%
          </span>
        )}
      </div>

      {/* Plans grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          return (
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
                  Mas popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                {price === 0 ? (
                  <span className="text-4xl font-bold text-white">Gratis</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-sm text-gray-400">USD / mes</span>
                  </>
                )}
              </div>

              <a
                href={`${APP_URL}/register`}
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
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Sin contrato, cancela cuando quieras. Precios en USD.
      </p>
    </div>
  );
}
