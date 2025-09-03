import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="evento" className="section bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12 gradient-text">
            Detalles del Evento
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ceremonia */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-light mb-4 text-gray-800">Ceremonia</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">6:00 PM</div>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="text-xl font-medium text-gray-700">Iglesia San Francisco de Asís</h4>
                <p className="text-gray-600">Calle Los Pinos, Managua</p>
                <motion.button
                  className="btn-secondary mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Ver Mapa
                </motion.button>
              </div>
            </motion.div>

            {/* Recepción */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-light mb-4 text-gray-800">Recepción</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">7:30 PM</div>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="text-xl font-medium text-gray-700">Hotel Double Tree by Hilton</h4>
                <p className="text-gray-600">Ent. Hotel DoubleTree, Managua</p>
                <motion.button
                  className="btn-secondary mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Ver Mapa
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Código de Vestimenta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-light mb-6 gradient-text">Código de Vestimenta</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-700 mb-4">Mujeres</h4>
                <p className="text-gray-600">Vestido largo de noche</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-medium text-gray-700 mb-4">Hombres</h4>
                <p className="text-gray-600">Traje formal</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 italic">
                Por favor no usar el color blanco ni azul, nos lo reservamos para la novia, novio y cortejo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
