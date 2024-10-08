import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import Loader from "./core/Loader.jsx";
import styled from 'styled-components';
import AnimatedComponent from "./core/AnimationDivs.jsx";


const ChartComponent = () => {
  const [chartType, setChartType] = useState('bar'); // 'bar' o 'area'
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [activeFilter, setActiveFilter] = useState('bar'); // Controlar qué botón está activo
  const [selectedCourse, setSelectedCourse] = useState(null); // Controlar el curso seleccionado

  // Datos de cursos y edades
  const courses = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'];
  const studentCounts = [20, 19, 22, 25, 18, 20, 22, 27, 30, 14];
  const studentAges = {
    '1A': [12, 13, 14, 14, 12, 13, 14, 12, 12, 13],
    '1B': [12, 13, 12, 12, 14, 13, 14, 13],
    '2A': [13, 14, 15, 14, 13, 14],
    '2B': [14, 15, 14, 13],
    '3A': [14, 15, 16, 15, 14, 15, 16, 14, 15, 16, 15, 16],
    '3B': [15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15],
    '4A': [15, 16, 17, 16, 15, 16],
    '4B': [16, 17, 16, 15, 16, 17, 16, 17],
    '5A': [17, 18, 18, 17, 18],
    '5B': [17, 18, 18, 17, 18, 17, 18, 17, 18],
  };

  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);
    setChartType(filterType);
    
    if (filterType === 'bar') {
      // Mostrar gráfico de barras
      setSelectedCourse(null); // Resetear curso seleccionado
      setSeries([{ name: 'Número de Estudiantes', data: studentCounts }]);
      setOptions({
        chart: {
          type: 'bar',
          background: 'transparent',
          height: 350,
          borderRadius: '0.4em',
        },
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            columnWidth: '40%',
          },
        },
        colors: studentCounts.map(count => {
            if (count >= 25) return '#d50000'; // Rojo para 25 o más estudiantes
            if (count >= 15) return '#2962ff'; // Azul para entre 15 y 24 estudiantes
            return '#ff6d00'; // Naranja para menos de 15 estudiantes
          }),
          dataLabels: {
            enabled: false, // Desactivar etiquetas de datos
          },
        fill: {
          opacity: 1,
        },
        grid: {
          borderColor: '#55596e',
          yaxis: { lines: { show: true } },
          xaxis: { lines: { show: true } },
        },
        legend: {
          show: true,
          position: 'top',
          labels: { colors: 'var(--colorTitle)' },
        },
        stroke: {
          colors: ['transparent'],
          show: true,
          width: 2,
        },
        tooltip: {
          shared: true,
          intersect: false,
          theme: 'dark',
        },
        xaxis: {
          categories: courses,
          title: {text: 'Cursos', style: { color: 'var(--colorTitle)' } },
          axisBorder: { show: true, color: '#55596e' },
          axisTicks: { show: true, color: '#55596e' },
          labels: { style: { colors: 'var(--colorTitle)' } },
        },
        yaxis: {
          title: { text: 'Número de Estudiantes', style: { color: 'var(--colorTitle)' } },
          axisBorder: { color: '#55596e', show: true },
          axisTicks: { color: '#55596e', show: true },
          labels: { style: { colors: 'var(--colorTitle)' } },
        },
      });
    } else if (filterType === 'area') {
      // Mostrar gráfico de edades
      const ages = selectedCourse
        ? studentAges[selectedCourse] || []
        : courses.flatMap(course => studentAges[course] || []);
      const sortedAges = [...ages].sort((a, b) => a - b); // Ordenar edades de menor a mayor
      setSeries([{ name: 'Edades', data: sortedAges }]);
      setOptions({
        chart: {
          type: 'area',
          background: 'transparent',
          height: 350,
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        colors: ['#2962ff'], // Color para el gráfico de áreas
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 100],
          },
        },
        grid: {
          borderColor: '#55596e',
          yaxis: { lines: { show: true } },
          xaxis: { lines: { show: true } },
        },
        legend: {
          show: true,
          position: 'top',
          labels: { colors: '#f5f7ff' },
        },
        tooltip: {
          shared: true,
          intersect: false,
          theme: 'dark',
        },
        xaxis: {
            title: { style: { color: '#f5f7ff' } },
            axisBorder: { show: true, color: '#55596e' },
            axisTicks: { show: true, color: '#55596e' },
            labels: { style: { colors: '#f5f7ff' }, formatter: () => '' }, // Ocultar etiquetas
          },
        yaxis: {
          title: { text: 'Edades', style: { color: 'var(--colorTitle)' } },
          axisBorder: { color: '#55596e', show: true },
          axisTicks: { color: '#55596e', show: true },
          labels: { style: { colors: 'var(--colorTitle)' } },
        },
      });
    }
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    handleFilterChange('area'); // Cambiar a gráfico de áreas cuando se selecciona un curso
  };

  useEffect(() => {
    handleFilterChange('bar'); // Por defecto, mostrar el gráfico de barras
  }, []);



  // LOADER
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  const ContLoadeer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  `;

const Div1 = styled.div`
 margin-bottom: 20px;
  display: flex; 
  justify-content: center;
  align-items: center;
`;
const Div2 = styled.div`
border-radius: 0.4em;
box-shadow: 1px 0px 2px 2px rgba(73, 80, 104, 0.4);
background: var(--backgroundGrafic);
width:100%;
`;
const DivCont = styled.div`
position: relative;
flex:1;
max-width:auto;
`;

  return (
    <DivCont>
      {isLoading ? (
        <ContLoadeer>
        <Loader />
      </ContLoadeer>
      ) : (
        <>
        <AnimatedComponent animationType="slideUp">
          <Div1>
            <button
              onClick={() => handleFilterChange('bar')}
              style={{
                marginRight: '10px',
                backgroundColor: activeFilter === 'bar' ? 'var(--bacgroundContent)' : '#ccc',
                color: activeFilter === 'bar' ? '#fff' : '#000',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Número de Estudiantes
            </button>
            <button
              onClick={() => handleFilterChange('area')}
              style={{
                backgroundColor: activeFilter === 'area' ? 'var(--bacgroundContent)' : '#ccc',
                color: activeFilter === 'area' ? '#fff' : '#000',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Edades
            </button>
          </Div1>

          {activeFilter === 'area' && (
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
              {courses.map(course => (
                <button
                  key={course}
                  onClick={() => handleCourseSelect(course)}
                  style={{
                    backgroundColor: selectedCourse === course ? 'var(--bacgroundContent)' : '#ccc',
                    color: selectedCourse === course ? '#fff' : '#000',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {course}
                </button>
              ))}
            </div>
          )}

          <Div2>
            <ApexCharts 
              key={chartType}
              options={options} 
              series={series} 
              type={chartType} 
              height={350} 
            />
          </Div2>
          </AnimatedComponent>
        </>
      )}
    </DivCont>
  );
};

export default ChartComponent;
