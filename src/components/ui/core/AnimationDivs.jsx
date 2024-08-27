import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Loader from './Loader.jsx';
import styled from 'styled-components';

// Estilo para el contenedor del loader
const ContLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Define las animaciones
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 }, // Ajustado para que se alinee con el div y no se doble
    visible: { opacity: 1, y: 0 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

const AnimatedComponent = ({ children, animationType = 'fadeIn' }) => {
  // Loader
  const [isLoading, setIsLoading] = useState(true);

  // Uso del hook useInView para la animación
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Ajusta este valor según necesites
  });

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  // Selecciona la animación basada en la prop animationType
  const selectedAnimation = animations[animationType] || animations.fadeIn;

  return (
    <>
      {isLoading ? (
        <ContLoader>
          <Loader />
        </ContLoader>
      ) : (
        <motion.div
          ref={ref}
          variants={selectedAnimation}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} // Asegura que el contenido se alinee correctamente
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default AnimatedComponent;
