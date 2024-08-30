import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader"; // Asegúrate de que la ruta sea correcta

const ScheduleContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
`;

const ScheduleTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ScheduleDescription = styled.p`
  color: #6b7280;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
`;

const StatusSpan = styled.span`
  display: flex;
  width: 80px;
  align-items: center;
  padding: 4px 8px;
  font-size: 0.9em;
  border-radius: 4px;
  color: ${(props) => (props.$active ? "#2ba972" : "#59719d")};
  background-color: ${(props) => (props.$active ? "rgba(43, 169, 114, 0.2)" : "rgba(89, 113, 157, 0.2)")};

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 4px;
    background-color: ${(props) => (props.$active ? "#2ba972" : "#59719d")};
  }
`;

const SelectDay = styled.select`
    width:100px;
    height: 36px;
    margin: 0 0 25px 0;
    padding: 0 1%;
    background: #eef4ff;
    box-shadow: 0 1px 6px rgba(142,136,192,0.2);
    border: none;
    border-radius: 0.4em;
    color: #687292;
    font-family: Helvetica Neue”,Helvetica,Arial,sans-serif;
    font-size: 0.9em;
    font-weight: 500;
    transition: all 300ms ease-out;

    &:focus
    outline: none!important;
    outline-width: 0!important;
    color: #4a567c!important;
    box-shadow: 0 0 0 2.5pt var(--backgroundBtnShearch)!important;
    transition: all 200ms ease-in;
}
`;


const OptionSelect = styled.option`
     color: #4a567c;
     font-weight: 500;
`;

const afternoonSchedules = {
  Lunes: [
    ["12:40 PM - 1:40 PM", "Dipper", "Historia"],
    ["1:55 PM - 2:55 PM", "Dipper", "Arte"],
    ["3:10 PM - 4:10 PM", "Dipper", "Música"],
    ["4:25 PM - 5:25 PM", "Dipper", "Física"],
    ["5:40 PM - 6:40 PM", "Dipper", "Química"],
  ],
  Martes: [
    ["12:40 PM - 1:40 PM", "Mabel", "Historia"],
    ["1:55 PM - 2:55 PM", "Mabel", "Arte"],
    ["3:10 PM - 4:10 PM", "Mabel", "Música"],
    ["4:25 PM - 5:25 PM", "Mabel", "Física"],
    ["5:40 PM - 6:40 PM", "Mabel", "Química"],
  ],
  // Agrega horarios para los otros días aquí...
};

const AfternoonSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("Lunes");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mostrar el loader cuando cambie el día
    setIsLoading(true);

    // Simular un retraso para cargar los datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, [selectedDay]);

  const isClassActive = (startTime, endTime) => {
    const now = new Date();
    const start = new Date();
    const end = new Date();

    const [startHour, startMinute, startPeriod] = startTime.match(/(\d+):(\d+) (AM|PM)/).slice(1, 4);
    const [endHour, endMinute, endPeriod] = endTime.match(/(\d+):(\d+) (AM|PM)/).slice(1, 4);

    start.setHours(
      startPeriod === "PM" && startHour !== "12" ? +startHour + 12 : +startHour
    );
    start.setMinutes(startMinute);

    end.setHours(
      endPeriod === "PM" && endHour !== "12" ? +endHour + 12 : endHour === "12" && endPeriod === "AM" ? 0 : +endHour
    );
    end.setMinutes(endMinute);

    return now >= start && now <= end;
  };

  return (
    <ScheduleContainer>
      <ScheduleTitle>Horario de la Tarde</ScheduleTitle>
      <ScheduleDescription>Selecciona un día para ver el horario:</ScheduleDescription>
      <SelectDay onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
        {Object.keys(afternoonSchedules).map((day) => (
          <OptionSelect key={day} value={day}>{day}</OptionSelect>
        ))} 
      </SelectDay>

      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Tiempo</TableHeader>
              <TableHeader>Profesor</TableHeader>
              <TableHeader>Asignatura</TableHeader>
              <TableHeader>Estado</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {afternoonSchedules[selectedDay].map(([time, teacher, subject]) => {
              const [startTime, endTime] = time.split(" - ");
              const active = isClassActive(startTime, endTime);

              return (
                <TableRow key={time}>
                  <TableCell>{time}</TableCell>
                  <TableCell>{teacher}</TableCell>
                  <TableCell>{subject}</TableCell>
                  <TableCell>
                    <StatusSpan $active={active}>
                      {active ? "activo" : "inactivo"}
                    </StatusSpan>
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      )}
    </ScheduleContainer>
  );
};

export default AfternoonSchedule;
