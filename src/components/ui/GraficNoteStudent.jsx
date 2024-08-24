import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ApexCharts from 'react-apexcharts';

const GraficNoteStudent = ({ id }) => {
  const MySwal = withReactContent(Swal);

  const chartData = {
    series: [{
      name: 'Notas',
      data: [4.5, 3.8, 4.0, 4.2, 3.9, 4.6, 4.3, 4.7]
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
        },
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
      title: 'Gráfica de Notas - Matemáticas',
      html: (
        <div id="chart">
          <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
      ),
      width: '98%', // Ajusta el ancho de la ventana
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar',
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
