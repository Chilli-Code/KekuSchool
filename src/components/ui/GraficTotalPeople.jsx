import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import Loader from './core/Loader.jsx';
import { totalGenderType } from '../../lib/data.ts';

const Container = styled.div`
  background-color: var(--backgroundGrafic);
  border-radius: 0.75rem; // rounded-xl
  width: 100%;
  height: 420px;
  border-radius: 0.4em;
  box-shadow:var(--boxShadowCont);
  padding: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 1.125rem; // text-lg
  font-weight: 600;
  color: var(--colorTitle); // font-semibold
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px; // Ajusta este valor según tus necesidades
`;

const ChartImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 400px) {
    transform:translate(-50%, -90%);
  }
  @media (max-width: 358px) {
    transform:translate(-50%, -144%);
}
pointer-events:none;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  translate:0 -60px; // gap-16
`;

const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; // gap-1
`;

const ColorCircle = styled.div`
  width: 1.25rem; // w-5
  height: 1.25rem; // h-5
  border-radius: 50%; // rounded-full
  background-color: ${(props) => props.color}; // Color dinámico
`;

const BottomItemTitle = styled.h1`
  font-weight: 700; // font-bold
  color:var(--colorTitle);
`;

const BottomItemSubtitle = styled.h2`
  font-size: 0.75rem; // text-xs
  color: #bec2ca; // text-gray-300
`;

const IconOpcion = styled.span`
    font-size:20px;
    font-family:'icons';
`;

const ContLoader = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;






const CountChart = () => {
// Calcula el número total de personas
const totalCount = totalGenderType.totalMan + totalGenderType.totalWoman;

// Calcula los porcentajes para hombres y mujeres
const boysPercentage = (totalGenderType.totalMan / totalCount) * 100;
const girlsPercentage = (totalGenderType.totalWoman / totalCount) * 100;

// Define las variables boysCount y girlsCount
const boysCount = totalGenderType.totalMan;
const girlsCount = totalGenderType.totalWoman;

// Datos para el gráfico
const chartData = {
  series: [girlsPercentage, boysPercentage], // El orden es importante
  options: {
    chart: {
      type: "radialBar",
      offsetY: 0,
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#ffffffd8",
          strokeWidth: "100%",
          opacity: 1,
          margin: 0,
        },
        dataLabels: {
          value: {
            show: true,
            formatter: function (value) {
              return `${Math.round(value)}%`;
            },
          },
        },
        startAngle: -90,
        endAngle: 270,
      },
    },
    colors: ["#FAE27C", "#00aaff"], // Amarillo para "Girls", azul para "Boys"
    labels: ["Mujeres", "Hombres"], // Etiquetas para cada serie
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const loadTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return () => clearTimeout(loadTimeout);
}, []);

return (
  <>
    {isLoading ? (
      <ContLoader>
        <Loader />
      </ContLoader>
    ) : (
      <Container>
        <Title>
          <TitleText>Students</TitleText>
          <IconOpcion>more_horiz</IconOpcion>
        </Title>
        <ChartContainer>
          <Chart options={chartData.options} series={chartData.series} type="radialBar" height="100%" />
          <ChartImage
            src="/img/maleFemale.png"
            alt="Male and Female"
            width={50}
            height={50}
          />
        </ChartContainer>
        <BottomContainer>
          <BottomItem>
            <ColorCircle color="#00aaff" />
            <BottomItemTitle>{boysCount}</BottomItemTitle>
            <BottomItemSubtitle>Hombres ({boysPercentage.toFixed(2)}%)</BottomItemSubtitle>
          </BottomItem>
          <BottomItem>
            <ColorCircle color="#f0c35c" />
            <BottomItemTitle>{girlsCount}</BottomItemTitle>
            <BottomItemSubtitle>Mujeres ({girlsPercentage.toFixed(2)}%)</BottomItemSubtitle>
          </BottomItem>
        </BottomContainer>
      </Container>
    )}
  </>
);
};

export default CountChart;

