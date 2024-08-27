import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ApexCharts from 'react-apexcharts';

const GraficNoteStudent = ({ asignatura }) => {
  const MySwal = withReactContent(Swal);

  const chartData = {
    series: [{
      name: 'Notas',
      data: [4.5, 3.8, 4.0, 4.2, 3.9, 4.6, 4.3, 2.9]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          colors: {
            ranges: [
              {
                from: 4.0,
                to: 5.0,
                color: '#2c9244ee'
              },
              {
                from: 3.0,
                to: 3.9,
                color: '#dfb22ef6'
              },
              {
                from: 0.0,
                to: 2.9,
                color: '#b31122ea'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Taller 1', 'Taller 2', 'Taller 3', 'Taller 4', 'Taller 5', 'Examen 1', 'Examen 2', 'Participación'],
      },
      yaxis: {
        title: {
          text: 'Puntuación (0-5)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " puntos";
          }
        }
      },
      customClass: {
        content: 'full-screen-content', // Aplica la clase personalizada
      }
    }
  };

  const showAlert = () => {
    MySwal.fire({
      title: `Gráfica de Notas ${asignatura}`,
      text: 'hola',
      html: (
        <div id="chart">
          <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
      ),
      width: '98%',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: 'full-screen-container'
      }
    });
  };

  return (
    <button onClick={showAlert} className="button buttonView">
      <span className="icon">insert_chart</span>
    </button>
  );
};

export default GraficNoteStudent;
