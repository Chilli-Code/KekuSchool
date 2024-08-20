import React, { useRef } from 'react';
import ApexCharts from 'react-apexcharts';

const materias = [
  'Español', 'Biología', 'Filosofía', 'Química', 'Sociales',
  'Matemáticas', 'Ed. Física', 'Física', 'Arte', 'Religión',
  'Ética', 'Inglés', 'Geometría'
];

// Genera datos ficticios de notas para cada materia
const generarNotas = () => {
  const notas = {};
  for (const materia of materias) {
    notas[materia] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6)); // Notas entre 0 y 5
  }
  return notas;
};

const notas = generarNotas();

const ChartSubjet = () => {
  // Datos ficticios para el gráfico
  const series = materias.map(materia => ({
    name: materia,
    data: notas[materia]
  }));

  // Opciones del gráfico
  const areaChartOptions = {
    series,
    chart: {
      type: 'area',
      background: 'transparent',
      height: 350,
      stacked: false,
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
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical'
      },
      type: 'gradient'
    },
    grid: {
      borderColor: '#55596e',
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
    legend: {
      labels: {
        colors: 'var(--colorTitle)'
      },
      show: true,
      position: 'bottom', // Mueve la leyenda a la parte inferior
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 10,
        vertical: 5
      },
      formatter: (seriesName) => seriesName
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true
      },
      axisTicks: {
        color: '#55596e',
        show: true
      },
      labels: {
        offsetY: 5,
        style: {
          colors: 'var(--colorTitle)'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Notas Mensuales',
        style: {
          color: 'var(--colorTitle)'
        }
      },
      labels: {
        style: {
          colors: 'var(--colorTitle)'
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark'
    }
  };

  // Función para restablecer el zoom
  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.chart.resetSeries();
    }
  };

  // Referencia para el gráfico de ApexCharts
  const chartRef = React.useRef(null);

  return (
    <div style={{ padding: '20px', 
      borderRadius: '0.4em',
      boxShadow: '1px 0px 2px 2px rgba(73, 80, 104, 0.4)',
      background: 'var(--backgroundGrafic)',
    }}>
      <ApexCharts
        ref={chartRef}
        options={areaChartOptions}
        series={areaChartOptions.series}
        type="area"
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
