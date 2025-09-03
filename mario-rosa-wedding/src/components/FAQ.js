import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Puedo llevar un acompañante/pareja?",
      answer: "¡Estamos muy emocionados de celebrar nuestra boda contigo! Sin embargo, les pedimos limitarse a los destinatarios mencionados en el detalle de la invitación. Nuestra logística ya está programada para un número específico de invitados por lo que no podemos realizar ajustes en este sentido."
    },
    {
      question: "¿Cuál es la fecha máxima para confirmar mi asistencia?",
      answer: "Te pedimos que por favor nos confirmes asistencia a más tardar el día 4 de diciembre."
    },
    {
      question: "¿Habrá transporte desde el hotel al evento?",
      answer: "Sí, habrá transporte disponible desde el Hotel Double Tree hacia ambos lugares del evento. Los horarios se confirmarán más cerca de la fecha."
    },
    {
      question: "¿Puedo tomar fotografías durante la ceremonia?",
      answer: "Durante la ceremonia religiosa, por favor abstente de tomar fotografías. Habrá un fotógrafo profesional capturando todos los momentos especiales."
    },
    {
      question: "¿Qué debo hacer si tengo alguna alergia alimentaria?",
      answer: "Por favor, comunícate con nosotros con anticipación para que podamos hacer los arreglos necesarios con el catering."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12 gradient-text">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg overflow-hidden shadow-lg"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-100 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="w-6 h-6 text-purple-600 flex-shrink-0"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-light mb-4 text-gray-800">
              ¿Tienes otra pregunta?
            </h3>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta adicional, no dudes en contactarnos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:mario.rosa@email.com', '_blank')}
              >
                Enviar Email
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('tel:+50522223333', '_blank')}
              >
                Llamar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
