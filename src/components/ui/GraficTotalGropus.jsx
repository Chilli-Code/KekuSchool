import React from 'react';
import Modal from 'react-modal';
import ReactApexChart from 'react-apexcharts';
import { totalPeopleData } from '../../lib/data.ts';
import { motion } from 'framer-motion';
import styled from 'styled-components';

Modal.setAppElement('#root'); // Asegúrate de que el root element esté correctamente definido

// Estilos para el contenido del modal
const ModalContent = styled(motion.div)`
  width: 100%;
  max-width: 500px; /* Ajusta el tamaño según tus necesidades */
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  overflow: hidden;
  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) !important;
`;

// Estilos para el botón de cierre
const ButtonClose = styled.button`
  color: #000;
  border: none;
  font-size: 1.7rem;
  border-radius: 50%;
  text-align: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: none;
  transition: all 300ms ease-out;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    transform: scale(1.06);
    background: none;
    color: #db4949;
    border: 0px;
  }
  &:active {
    transform: scale(1.06);
    background: none;
    color: #db4949;
    border: 0px;
  }
`;

// Variantes para la animación del modal
const chartModalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

// Estilo para el overlay del modal
const overlayStyle = {
  content: {
    padding: '0',
    border: 'none',
    background: 'transparent',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  },
};

const DivInfo = styled.div`
margin: 20px 0px 0px 0px;
position: relative;

`;

const H2 = styled.h2`
padding: 10px 0px;
`;

const Pt = styled.p`
padding: 5px 0px;
`;

const ChartModal = ({ isOpen, onRequestClose, category }) => {
  // Comprobar si la categoría es válida y obtener los datos
  const categoryData = totalPeopleData[category] || {};
  const { totalMan = 0, totalWoman = 0 } = categoryData;
  const total = totalMan + totalWoman;

  const menPercentage = (totalMan / total) * 100;
  const womenPercentage = (totalWoman / total) * 100;

  const chartData = {
    series: [womenPercentage, menPercentage],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Women', 'Men'],
      colors: ['#FAE27C', '#00aaff'],
      tooltip: {
        y: {
          formatter: function (value) {
            return value.toFixed(3); // Limitar a 3 decimales
          },
        },
      },
    },
};
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Gender Distribution - ${category}`}
      style={overlayStyle}
    >
      <ModalContent
        variants={chartModalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ButtonClose className="icon" onClick={onRequestClose}>cancel</ButtonClose>
        <DivInfo>
        <H2>Información - {category === 'totalStudents' ? 'Estudiantes' : category === 'totalTeachers' ? 'Profesores' : category === 'totalParents' ? 'Padres' : 'Personal'}</H2>
        <Pt>Hombres: {totalMan}</Pt>
        <Pt>Mujeres: {totalWoman}</Pt>
        <Pt>Total: {total}</Pt>
        </DivInfo>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type={chartData.options.chart.type}
          height={300}
        />
      </ModalContent>
    </Modal>
  );
};

export default ChartModal;
