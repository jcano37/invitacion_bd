import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="nosotros" className="section bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 gradient-text">
            Nuestra Boda
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mario y Rosa"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <h3 className="text-3xl font-light mb-6 text-gray-800">
                "Desde el primer instante supimos que no era la primera vez que nos encontrábamos... nuestras almas ya se conocían"
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Después de años de amor y crecimiento juntos, hemos decidido dar el siguiente paso 
                en nuestra historia. Te invitamos a ser parte de este momento tan especial en nuestras vidas.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-gray-600">Diciembre</div>
                <div className="text-gray-600">2024</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">6:00</div>
                <div className="text-gray-600">PM</div>
                <div className="text-gray-600">Ceremonia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">7:30</div>
                <div className="text-gray-600">PM</div>
                <div className="text-gray-600">Recepción</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
