import { useState } from 'react';

const faqs = [
  {
    question: '¿Necesito saber de tecnología para usarlo?',
    answer:
      'No. MoviPacks está diseñado para personas que no son técnicas. Si sabes usar WhatsApp, puedes usar MoviPacks. La interfaz es simple, en español, y funciona desde el primer día.',
  },
  {
    question: '¿Funciona para cualquier operación FLEX de Mercado Libre?',
    answer:
      'Sí. Funciona para cualquier operador FLEX, sin importar el tamaño de tu operación. Compatible con Chile, Argentina, México, Colombia y el resto de Latinoamérica — se adapta automáticamente a tu zona horaria.',
  },
  {
    question: '¿Puedo generar un reporte de cobro para mis clientes?',
    answer:
      'Sí. Para cada cliente puedes ver exactamente cuánto te debe, qué paquetes están pendientes de pago y generar un reporte imprimible en segundos. Sin armar tablas en Excel, sin buscar conversaciones en WhatsApp.',
  },
  {
    question: '¿Cuántos repartidores y clientes puedo agregar?',
    answer:
      'Depende del plan. El plan Basic permite hasta 10 de cada uno, Pro hasta 50, y Premium hasta 200. Durante el período de prueba puedes agregar hasta 2 clientes y 2 repartidores para probar todas las funcionalidades.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Totalmente. Usamos cifrado en tránsito y en reposo, y backups automáticos. Tus datos nunca se comparten con terceros ni con Mercado Libre.',
  },
  {
    question: '¿Qué pasa cuando terminan los 7 días de prueba?',
    answer:
      'Te avisamos antes de que termine. Puedes elegir entre tres planes: Basic ($19.990/mes, hasta 50 paquetes/día), Pro ($49.990/mes, hasta 250 paquetes/día) o Premium ($99.990/mes, paquetes ilimitados). Los primeros operadores en registrarse tienen condiciones especiales.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-neutral-800">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="pr-6 text-base font-medium text-white sm:text-lg">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm leading-relaxed text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
