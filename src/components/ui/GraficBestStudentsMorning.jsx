import React from 'react';
import ApexCharts from 'react-apexcharts';

// Datos del mejor estudiante por curso
const bestStudents = {
  '1A': 'Juan Pérez',
  '1B': 'Ana Gómez',
  '2A': 'Carlos Ruiz',
  '2B': 'Laura Martínez',
  '3A': 'Sofía Rodríguez',
  '3B': 'Miguel Fernández',
  '4A': 'Valeria González',
  '4B': 'Luis López',
  '5A': 'Paola Castillo',
  '5B': 'Andrés Morales'
};

// Extraer los nombres de los cursos y de los mejores estudiantes
const courses = Object.keys(bestStudents);
const studentNames = Object.values(bestStudents);

// Preparar los datos para el gráfico
const series = [{
  name: 'Curso',
  data: courses.map((course, index) => ({
    x: course,
    y: index + 1 // Usa el índice para crear el efecto escalonado
  }))
}];

const ChartBestStudentsMorning = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true, // Barras horizontales
        distributed: true,
        borderRadius: 4,
        dataLabels: {
          enabled: false, // Desactiva completamente las etiquetas de datos
          style: {
            colors: ['#ffffff'], // Asegura que el texto sea blanco si se muestra
            fontSize: '12px'
          }
        }
      }
    },
    colors: ['#2962ff'], // Color de las barras
    xaxis: {
      title: {
        text: `Mes: ${new Date().toLocaleString('default', { month: 'long' })}`, // Muestra el mes actual en el título
        style: {
          color: 'var(--colorTitle)' // Color del título del eje X
        }
      },
      labels: {
        style: {
          colors: 'var(--colorTitle)' // Color de las etiquetas del eje X
        }
      },
      categories: courses, // Asegúrate de que las categorías estén correctas
      tickAmount: courses.length, // Ajusta la cantidad de ticks según el número de cursos
      max: 10 // Ajusta el máximo del eje X a 10
    },
    yaxis: {
      title: {
        text: 'Cursos',
        style: {
          color: 'var(--colorTitle)' // Color del título del eje Y
        }
      },
      labels: {
        style: {
          colors: 'var(--colorTitle)' // Color de las etiquetas del eje Y
        }
      },
      min: 0,
      max: courses.length, // Ajusta el rango del eje Y para cubrir todos los cursos
      tickAmount: courses.length // Ajusta la cantidad de ticks en el eje Y
    },
    tooltip: {
      shared: false,
      intersect: true,
      theme: 'light',
      y: {
        formatter: (val, opts) => `Estudiante: ${studentNames[opts.dataPointIndex]}` // Muestra el nombre del estudiante en el tooltip
      }
    },
    legend: {
      show: false // Desactiva la leyenda
    },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--backgroundGrafic)', borderRadius: '0.4em',boxShadow:'rgba(73, 80, 104, 0.4) 1px 0px 2px 2px' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0, color: 'var(--colorTitle)' }}>Jornada mañana</h2>
      </div>
      <ApexCharts
        options={chartOptions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartBestStudentsMorning;
