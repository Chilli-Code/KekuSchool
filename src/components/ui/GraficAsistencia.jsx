import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import Loader from './core/Loader.jsx';

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

const getCssVariable = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

// Componente para el gráfico de asistencia
const AttendanceChart = ({ attendance }) => {
  const [colorTitle, setColorTitle] = useState('');

  useEffect(() => {
    const color = getCssVariable('--colorTitle');
    console.log('Color Title:', color); // Verifica el valor de la variable
    setColorTitle(color || '#000'); // Establece un valor predeterminado si no se obtiene ningún color
  }, []);

  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['Attended', 'Missed'],
      axisBorder: {
        color: '#777',
      },
      labels: {
        style: {
          colors: [colorTitle], // Aplicando color a las etiquetas del eje X
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [colorTitle], // Aplicando color a las etiquetas del eje Y
        },
      },
      title: {
        text: 'Attendance',
        style: {
          color: colorTitle, // Aplicando color al título del eje Y
        },
      },
    },
    legend: {
      labels: {
        colors: [colorTitle], // Aplicando color a las etiquetas de la leyenda (cuadritos de abajo)
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
      },
    },
    colors: ['#248541', '#C70039'],
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

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
        <>
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
        </>
      )}
    </div>
  );
};

export default CustomPickersDay;
