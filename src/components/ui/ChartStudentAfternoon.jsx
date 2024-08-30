import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import Loader from './core/Loader.jsx';
import AnimatedComponent from "./core/AnimationDivs.jsx";

const Container = styled.div`
  background-color: var(--backgroundGrafic);
  border-radius: 0.75rem; // rounded-xl
  max-width: auto;
  /* flex:1; */
  margin-top:50px;
  height: auto;
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
  height: 300px; // Ajusta este valor según tus necesidades
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
`;

const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    translate: 0px -60px;
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
  color: #d1d5db; // text-gray-300
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






const GraficNumberJornadaAfternoon = () => {
  // Número total de niños
  const totalCount = 1000;
  
  // Cantidad de niños por categoría
  const [boysCount, setBoysCount] = useState(550); // Número de niños en la categoría de chicos
  const [girlsCount, setGirlsCount] = useState(650); // Número de niños en la categoría de chicas

  // Calcula los porcentajes
  const boysPercentage = (boysCount / totalCount) * 100;
  const girlsPercentage = (girlsCount / totalCount) * 100;

  // Datos para el gráfico
  const chartData = {
    series: [boysPercentage, girlsPercentage],
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
          size: undefined,
          inverseOrder: false,
          hollow: {
            margin: 0,
            size: "50%", // Ajusta el tamaño del hueco
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
            name: {
              show: false,
            },
            value: {
              show: true,
              formatter: function (value) {
                return `${Math.round(value)}%`; // Muestra el porcentaje en la gráfica
              },
            },
          },
          startAngle: -90,
          endAngle: 270,
        },
      },
      colors: ["#FAE27C", "#00aaff"],
      labels: ["Girls", "Boys"],
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: false, // Desactiva el tooltip
      },
    },
  };



  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false); // Se asume que el componente ha "terminado" de cargarse
    }, 1000); // Ajusta el tiempo según el tiempo real de carga

    return () => clearTimeout(loadTimeout);
  }, []);


  return (
  <>
  {isLoading ? (
      <ContLoader>
        <Loader />
      </ContLoader>
    ) : (
      <AnimatedComponent animationType="fadeIn">
    <Container>
      <Title>
        <TitleText>Numero de Generos</TitleText>
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
          <BottomItemSubtitle>Boys ({boysPercentage.toFixed(2)}%)</BottomItemSubtitle>
        </BottomItem>
        <BottomItem>
          <ColorCircle color="#f0c35c" />
          <BottomItemTitle>{girlsCount}</BottomItemTitle>
          <BottomItemSubtitle>Girls ({girlsPercentage.toFixed(2)}%)</BottomItemSubtitle>
        </BottomItem>
      </BottomContainer>
    </Container>
    </AnimatedComponent>
    )}
  </>
  );
};

export default GraficNumberJornadaAfternoon;
