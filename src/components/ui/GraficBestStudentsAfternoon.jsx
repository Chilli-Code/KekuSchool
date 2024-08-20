import React from 'react';
import ApexCharts from 'react-apexcharts';

// Datos del mejor estudiante por curso
const bestStudents = {
  '6A': 'Juan Pérez',
  '6B': 'Ana Gómez',
  '7A': 'Carlos Ruiz',
  '7B': 'Laura Martínez',
  '8A': 'Sofía Rodríguez',
  '8B': 'Miguel Fernández',
  '9A': 'Valeria González',
  '9B': 'Luis López',
  '10A': 'Paola Castillo',
  '10B': 'Andrés Morales',
  '11A': 'Paola Castillo',
  '11B': 'Andrés Morales',
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

const ChartBestStudentsAfternoon = () => {
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
      max: 12 // Ajusta el máximo del eje X a 10
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
    <div style={{ padding: '20px', backgroundColor: 'var(--backgroundGrafic)', borderRadius: '0.4em',boxShadow:'rgba(73, 80, 104, 0.4) 1px 0px 2px 2px',}}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0, color: 'var(--colorTitle)' }}>Jornada tarde</h2>
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

export default ChartBestStudentsAfternoon;
