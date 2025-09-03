import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GiftInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="regalos" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 gradient-text">
            Sugerencia de Regalo
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Para empezar nuestra nueva etapa y todos los proyectos con los que soñamos, 
            les agradecemos enormemente que depositen sus obsequios en una de nuestras cuentas bancarias.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* BAC */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-700 mb-2">BAC</h3>
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-lg font-medium text-gray-700">Mario Antonio Pérez</h4>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-mono font-bold text-gray-800">369637335</p>
                </div>
                <motion.button
                  className="btn mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigator.clipboard.writeText('369637335')}
                >
                  Copiar Número
                </motion.button>
              </div>
            </motion.div>

            {/* Lafise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Lafise</h3>
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-lg font-medium text-gray-700">Rosa María Silva</h4>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-mono font-bold text-gray-800">109292131</p>
                </div>
                <motion.button
                  className="btn mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigator.clipboard.writeText('109292131')}
                >
                  Copiar Número
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-light mb-4 text-gray-800">
              ¡Gracias por tu generosidad!
            </h3>
            <p className="text-gray-600">
              Tu regalo nos ayudará a construir nuestro futuro juntos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftInfo;
