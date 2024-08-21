import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const ChartComponent2 = () => {
  const [chartType, setChartType] = useState('bar'); // 'bar' o 'area'
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [activeFilter, setActiveFilter] = useState('bar'); // Controlar qué botón está activo
  const [selectedCourse, setSelectedCourse] = useState(null); // Controlar el curso seleccionado

  // Datos de cursos y edades
  const courses = ['6A', '6B', '7A', '7B', '8A', '8B', '9A', '9B', '10A', '10B', '11A', '11B'];
  const studentCounts = [20, 19, 22, 25, 18, 20, 22, 27, 30, 14, 20, 15];
  const studentAges = {
    '6A': [12, 13, 14, 14, 12, 13, 14, 12, 12, 13],
    '6B': [12, 13, 12, 12, 14, 13, 14, 13],
    '7A': [13, 14, 15, 14, 13, 14],
    '7B': [14, 15, 14, 13],
    '8A': [14, 15, 16, 15, 14, 15, 16, 14, 15, 16, 15, 16],
    '8B': [15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15],
    '9A': [15, 16, 17, 16, 15, 16],
    '9B': [16, 17, 16, 15, 16, 17, 16, 17],
    '10A': [17, 18, 18, 17, 18],
    '10B': [17, 18, 18, 17, 18, 17, 18, 17, 18],
    '11A': [17, 18, 18, 17, 18, 17, 18, 17, 18],
    '11B': [17, 18, 18, 17, 18, 17, 18, 17, 18],
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

  return (
    <div>
      <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
      </div>
      {activeFilter === 'area' && (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
          {courses.map(course => (
            <button
              key={course}
              onClick={() => handleCourseSelect(course)}
              style={{
                marginRight: '10px',
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
      <div style={{
        borderRadius: '0.4em',
        boxShadow: '1px 0px 2px 2px rgba(73, 80, 104, 0.4)',
        background: 'var(--backgroundGrafic)',
      }}>
        <ApexCharts 
          key={chartType}
          options={options} 
          series={series} 
          type={chartType} 
          height={350} 
        />
      </div>
    </div>
  );
};

export default ChartComponent2;
