import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ShowTableStudents from "./ShowTableStudentsGroups.jsx";
import TableStudentsGolbal from "../../Table_Students_Global.astro";
import Loader from "./Loader.jsx";
import 'animate.css';



const CustomDiv = styled(motion.div)`
  .custom-div {
    border-radius: 16px;
    padding: 16px;
    flex: 1;
    min-width: 130px;
    cursor: pointer;
    text-align: center;
  }
  .custom-div:nth-child(odd) {
    background-color: #6B21A8;
  }
  .custom-div:nth-child(even) {
    background-color: #FAE27C;
  }
  display: flex;
  gap: 16px;
  justify-content: space-between; 
  flex-wrap: wrap; 
  
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;
const ButtonTable = styled.button`
  font-size: 2rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
`;

// Componente principal
const TableGroupsMorning = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const loadTimeout = setTimeout(() => {
        setIsLoading(false); // Se asume que el componente ha "terminado" de cargarse
      }, 1000); // Ajusta el tiempo según el tiempo real de carga
  
      return () => clearTimeout(loadTimeout);
    }, []);
  
  const ListStudents = [
    {
      id:"1",
      curso: "1A",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"2",
      curso: "1B",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"3",
      curso: "2A",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"4",
      curso: "2B",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"5",
      curso: "3A",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"6",
      curso: "3B",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"7",
      curso: "4A",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"8",
      curso: "4B",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"9",
      curso: "5A",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
    {
      id:"10",
      curso: "5B",
      totalStudents: 25,
      tableStudents: TableStudentsGolbal,
    },
  
 
    
  ];


  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: "easeInOut"
      }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: "easeInOut" } }
  };


  // Renderiza el contenido en un portal
  const content = (
    <AnimatePresence>
        {isVisible && (
            <CustomDiv
            className="custom-div"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            >
                {ListStudents.map((student, index) => (
                    <motion.div
                    whileHover={{
                        scale: 1.05,
                        rotate: index % 2 === 0 ? 5 : -5 // Aplica rotación según el índice
                        }}
                        whileTap={{
                            scale: 1.05,
                            rotate: index % 2 === 0 ? 5 : -5,
                          }}
                        className="custom-div"
                        key={student.id}
                        style={{
                            backgroundColor: index % 2 === 0 ? '#6B21A8' : '#FAE27C' // Aplica color de fondo según el índice
                            }}
                            >
                                <div className="custom-header">
                                    <ShowTableStudents curso={student.curso} client:only="react" />
                                </div>
                                    <h1 className="custom-h1">Curso:<br /><b>{student.curso}</b></h1>
                                    <h2 className="custom-h2">Total de Alumnos: <b>{student.totalStudents}</b></h2>
                    </motion.div>
                ))}
            </CustomDiv>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ButtonTable className="dayMorning icon" onClick={() => setIsVisible(!isVisible)}>
            visibility
        </ButtonTable>
      )}
{ReactDOM.createPortal(content, document.getElementById("morningTable"))}
    </div>
  );
};

export default TableGroupsMorning;
