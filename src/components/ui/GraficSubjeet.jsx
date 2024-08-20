import React, { useRef } from 'react';
import ApexCharts from 'react-apexcharts';

// Función para obtener el valor de una variable CSS
const getCssVariable = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

// Datos ficticios para el gráfico
const materias = ['Español', 'Biología', 'Filosofía', 'Química', 'Sociales', 'Matemáticas', 'Educación Física', 'Física', 'Arte', 'Religión', 'Ética', 'Inglés', 'Geometría'];
const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'];

// Generación de datos aleatorios
const generateRandomData = () => Array.from({ length: meses.length }, () => Math.floor(Math.random() * 6));

const ChartSubjet = () => {
  // Datos ficticios para el gráfico
  const series = materias.map(materia => ({
    name: materia,
    data: generateRandomData()
  }));
  
  const colorTitle = getCssVariable('--colorTitle');

  const chartOptions = {
    series,
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      background: 'transparent', // Fondo transparente
      toolbar: {
        show: true,
        tools: {
          zoomin: true,
          zoomout: true,
          reset: true
        }
      }
    },
    colors: ["#00ab57", "#d50000", "#ff9800", "#3f51b5", "#e91e63", "#9c27b0", "#00bcd4", "#4caf50", "#ff5722", "#607d8b", "#f44336", "#8bc34a", "#cddc39"],
    xaxis: {
      categories: meses,
      axisBorder: {
        color: '#777'
      },
      axisTicks: {
        color: '#777'
      },
      labels: {
        style: {
          colors: colorTitle // Usa el color de la variable CSS para las etiquetas del eje x
        }
      }
    },
    yaxis: {
      title: {
        text: 'Notas Mensuales',
        style: {
          color: colorTitle // Usa el color de la variable CSS para el título del eje y
        }
      },
      labels: {
        style: {
          colors: colorTitle // Usa el color de la variable CSS para las etiquetas del eje y
        }
      }
    },
    legend: {
      labels: {
        colors: colorTitle // Usa el color de la variable CSS para las etiquetas de la leyenda
      },
      show: true,
      position: 'top'
    },
    grid: {
      borderColor: '#e0e0e0', // Color de las líneas de la rejilla
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'light' // Opción de tema claro
    }
  };

  // Función para restablecer el zoom
  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.chart.resetZoom();
    }
  };

  // Referencia para el gráfico de ApexCharts
  const chartRef = useRef(null);

  return (
    <div style={{
       padding: '20px',
      borderRadius: '0.4em',
      boxShadow: '1px 0px 2px 2px rgba(73, 80, 104, 0.4)',
      background: 'var(--backgroundGrafic)', }}>
      <ApexCharts
        ref={chartRef}
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
      <button
        onClick={resetZoom}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#00ab57',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Restablecer Vista
      </button>
    </div>
  );
};

export default ChartSubjet;
