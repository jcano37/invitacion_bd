import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Parents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
            Con la Bendición de Nuestros Padres
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Novio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-light mb-6 text-gray-800">Novio</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-700 mb-2">Mario Antonio Pérez</h4>
                  <p className="text-gray-600">Padre</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-700 mb-2">María Elena González</h4>
                  <p className="text-gray-600">Madre</p>
                </div>
              </div>
            </motion.div>

            {/* Novia */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-light mb-6 text-gray-800">Novia</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-700 mb-2">Carlos Roberto Silva</h4>
                  <p className="text-gray-600">Padre</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-700 mb-2">Ana Patricia Morales</h4>
                  <p className="text-gray-600">Madre</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-3xl font-light mb-8 gradient-text">
              Acompañados de Nuestros Padrinos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-700 mb-2">Roberto Alejandro Martínez</h4>
                <p className="text-gray-600">Padrino</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-700 mb-2">Carmen Elena Rodríguez</h4>
                <p className="text-gray-600">Madrina</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-medium text-gray-700 mb-2">Sofía Isabel Pérez</h4>
              <p className="text-gray-600">Dama de Honor</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Parents;
