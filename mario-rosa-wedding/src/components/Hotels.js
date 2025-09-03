import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hotels = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="hoteles" className="section bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 gradient-text">
            Hoteles
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Te recomendamos una opción de hospedaje que facilitará tu estadía
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-light mb-4 text-gray-800">Hotel Double Tree</h3>
                <p className="text-gray-600 mb-6">
                  Ubicado estratégicamente cerca de los lugares del evento, 
                  ofrece comodidad y elegancia para tu estadía.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">Código de descuento:</h4>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xl font-mono font-bold text-purple-600">Pérez&Silva</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">+505 2222-3333</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Hotel Double Tree"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <motion.button
                  className="btn mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://doubletree.com', '_blank')}
                >
                  Reservar Ahora
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-light mb-4 text-gray-800">
              Información Adicional
            </h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li>• Check-in: 3:00 PM</li>
              <li>• Check-out: 12:00 PM</li>
              <li>• Estacionamiento gratuito</li>
              <li>• WiFi incluido</li>
              <li>• Desayuno buffet</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hotels;
