import React from 'react';
import styled from 'styled-components';

const studentInfo = [
    {
        id: "1",
        name: "Jorge Eliecer Villamizar Bolivar",
        jornada: "mañana",
        curso: "11B",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "2",
        name: "Jorge Villamizar Bolivar",
        jornada: "mañana",
        curso: "11B",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "3",
        name: "Jorge Villamizar Bolivar",
        jornada: "mañana",
        curso: "11B",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "4",
        name: "Jorge Villamizar Bolivar",
        jornada: "mañana",
        curso: "11B",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "5",
        name: "Jorge Villamizar Bolivar",
        jornada: "mañana",
        curso: "11B",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    }
    // Agrega más estudiantes si es necesario...
];



const ContainerTable = styled.div`
height: auto;
width:100%;
`;

const TableData = styled.td`
@media (max-width: 768px){
    display:table-cell !important;
}
text-align:justify;
`;

const IcoBig = styled.th`
    font-size: 1.2rem;
    text-align:center !important;
`;

const hiddenThead = styled.th`
@media (max-width: 768px){
    display: none;
}


`;

const ButtonView = styled.a`
  text-decoration:none;
`;
const TableStudentsGlobal = () => {
    return (
<ContainerTable className="container">
<div className="top-section">
    <h1 className="title">All Student</h1>
    <div className="button-group">
        <div className="search">
            <div className="barra">
                <input type="text" className="text-search" id="txtSearch" name="search" placeholder="Buscar..." />
                <button id="btnSearch" className="btn-search icon" type="submit">search</button>
            </div>
        </div>
    </div>
</div>
  <div className="table-container">
    <table className="w-full">
      <thead className="thead table-data-head">
        <tr>
          <th>Nombre</th>
          <IcoBig className="icon">visibility</IcoBig>
        </tr>
      </thead>
      <tbody>
        {studentInfo.map((item) => (
          <tr key={item.id} className="table-row">
            <td className="table-dataa">
              <img alt='Imagen Estudiante' loading='lazy' src={item.photo} className="imgTable" />
              <div className="contImgTable">
                <h3>{item.name}</h3>
              </div>
            </td>
            <TableData className="table-data">
              <div className="actions-container">
                <a>
                  <ButtonView href="/view_students" className="button buttonView icon">
                  visibility
                  </ButtonView>
                </a>
              </div>
            </TableData>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="pagination-container">
    <button className="pagination-button" disabled>Prev</button>
    <div className="page-numbers">
      <button className="page-button active">1</button>
      <button className="page-button">2</button>
      <button className="page-button">3</button>
      ...
      <button className="page-button">10</button>
    </div>
    <button className="pagination-button">Next</button>
  </div>
</ContainerTable>

    );
};

export default TableStudentsGlobal;
