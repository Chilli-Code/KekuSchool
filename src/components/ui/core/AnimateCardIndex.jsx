import React, { useState } from 'react';
import ChartModal from '../GraficTotalGropus.jsx';
import MiniMenu from "./MiniMenu.jsx";
import { totalPeopleData } from "../../../lib/data.ts";
import { motion } from "framer-motion";
import styled from "styled-components";
// STYLE GLOBAL
const CustomDiv = styled(motion.div)`
  .custom-div {
    border-radius: 16px;
    padding: 16px;
    flex: 1;
    min-width: 130px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .custom-div:hover {
    transform: scale(1.05) !important;
  }
  .custom-div:nth-child(odd) {
    background-color: #6b21a8;
  }
  .custom-div:nth-child(even) {
    background-color: #fae27c;
  }
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;

  .custom-header {
    display: flex;
    justify-content: space-between;
  }
  .custom-h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 16px 0;
    color: #000;
  }
  .custom-h2 {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
  .custom-span {
    font-size: 10px;
    background-color: #ffffff;
    padding: 4px 8px;
    border-radius: 9999px;
    color: #16a34a;
  }
  .icon {
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

// ANIMACIONES FRAME-MOTION
const customDivVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AnimatedDivs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const openModal = (category) => {
    setModalCategory(category);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalCategory('');
  };
  const functionMap = {
    handlePreviewStudents: () => openModal('totalStudents'),
    handlePreviewTeachers: () => openModal('totalTeachers'),
    handlePreviewParents: () => openModal('totalParents'),
    handlePreviewStaff: () => openModal('totalStaff'),
    handleSettings: () => console.log("Settings clicked"),
    handleNewOption: () => console.log("New Option clicked"),
  };

  const getEnhancedOptions = (previewFunctionName) => {
    return totalPeopleData.options.map(option => ({
      ...option,
      action: functionMap[option.action === 'handlePreview' ? previewFunctionName : option.action],
    }));
  };
  return (
    <CustomDiv
      variants={customDivVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Estudiantes */}
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">{totalPeopleData.year}</span>
          <MiniMenu options={getEnhancedOptions('handlePreviewStudents')} />
        </div>
        <h1 className="custom-h1">{totalPeopleData.totalStudents.total}</h1>
        <h2 className="custom-h2">Estudiantes</h2>
      </motion.div>

      {/* Profesores */}
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">{totalPeopleData.year}</span>
          <MiniMenu options={getEnhancedOptions('handlePreviewTeachers')} />
        </div>
        <h1 className="custom-h1">{totalPeopleData.totalTeachers.total}</h1>
        <h2 className="custom-h2">Profesores</h2>
      </motion.div>

      {/* Padres */}
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">{totalPeopleData.year}</span>
          <MiniMenu options={getEnhancedOptions('handlePreviewParents')} />
        </div>
        <h1 className="custom-h1">{totalPeopleData.totalParents.total}</h1>
        <h2 className="custom-h2">Padres</h2>
      </motion.div>

      {/* Personal */}
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">{totalPeopleData.year}</span>
          <MiniMenu options={getEnhancedOptions('handlePreviewStaff')} />
        </div>
        <h1 className="custom-h1">{totalPeopleData.totalStaff.total}</h1>
        <h2 className="custom-h2">Personal</h2>
      </motion.div>

      {/* Modal para gráficos */}
      <ChartModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        category={modalCategory}
      />
    </CustomDiv>
  );
};

export default AnimatedDivs;
