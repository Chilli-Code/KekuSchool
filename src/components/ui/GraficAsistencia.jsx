import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import Loader from './core/Loader.jsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Estilo personalizado para DayPicker
const StyledDayPicker = styled(DayPicker)`
  .rdp-months {
    background-color: var(--bacgroundContent);
    color: #ecf0f1;
    box-shadow: var(--boxShadowCont);
    padding: 10px 10px;
    border-radius: 0.4em;
  }

  .rdp-chevron {
    display: inline-block;
    fill: var(--backgroundBtnShearch);
  }

  .rdp-today:not(.rdp-outside) {
    border: 1px solid;
    border-radius: 50%;
    border-color: #1aaedd;
    color: #1aaedd;
    font-weight: bold;
  }
  .rdp-dropdown {
    padding: 10px 10px !important;
  }
`;

const ContLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerChart = styled.div`
  padding: 20px;
  border-radius: 0.4em;
  box-shadow: rgba(73, 80, 104, 0.4) 1px 0px 2px 2px;
  background: var(--backgroundGrafic);
  margin-top: 20px;
`;

// Frame Motion
const customDivVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const CustomDiv = styled(motion.div)`
  width: 100%;
`;

// Componente para el gráfico de asistencia
const AttendanceChart = ({ attendance }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['Asistió', 'Faltó'],
      axisBorder: {
        color: 'var(--colorTitle)',
      },
      labels: {
        style: {
          colors: 'var(--colorTitle)',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: 'var(--colorTitle)',
        },
      },
      title: {
        text: 'Asistencia',
        style: {
          color: 'var(--colorTitle)',
        },
      },
    },
    legend: {
      labels: {
        colors: 'var(--colorTitle)',
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
      },
    },
    colors: ['#248541', '#C70039'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#248541', '#C70039'],
        opacityFrom: 0.8,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: 'Attendance',
      data: [attendance.attended.length, attendance.missed.length],
    },
  ];

  return <ApexCharts options={options} series={series} type="bar" height={200} />;
};

// Componente principal
const CustomPickersDay = () => {
  // Loader
  const [isLoading, setIsLoading] = useState(true);
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

  // INFORMACION DE ASISTENCIA
  const [attendance, setAttendance] = useState({
    attended: [
      new Date(2024, 7, 12),
      new Date(2024, 7, 15),
      new Date(2024, 7, 20),
    ],
    missed: [
      new Date(2024, 7, 13),
      new Date(2024, 7, 7),
    ],
  });

  const modifiers = {
    attended: attendance.attended,
    missed: attendance.missed,
  };

  const modifiersStyles = {
    attended: {
      color: 'white',
      backgroundColor: 'red',
      borderRadius: '50%',
    },
    missed: {
      color: 'white',
      backgroundColor: '#248541',
      borderRadius: '50%',
    },
  };

  return (
    <div>
      {isLoading ? (
        <ContLoader>
          <Loader />
        </ContLoader>
      ) : (
        <CustomDiv
          ref={ref}
          variants={customDivVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <StyledDayPicker
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            captionLayout="dropdown"
            startMonth={new Date(2015, 6)}
            endMonth={new Date(2025, 9)}
          />
          <ContainerChart>
            <AttendanceChart attendance={attendance} />
          </ContainerChart>
        </CustomDiv>
      )}
    </div>
  );
};

export default CustomPickersDay;
