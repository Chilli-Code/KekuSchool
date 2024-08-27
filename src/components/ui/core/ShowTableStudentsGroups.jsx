import React from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import withReactContent from 'sweetalert2-react-content';
import TableStudentsGlobal from './TableStudentsGroups.jsx';
import MiniMenu from './MiniMenu.jsx';

const ButtonTable = styled.button`
  font-size: 20px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
`;

const NoPaddingContainer = styled.div`
  .swal2-html-container {
    padding: 0 !important;
  }
`;

const MySwal = withReactContent(Swal);

const ShowTableStudents = ({ curso }) => {
  const showAlert = () => {
    MySwal.fire({
      title: `Lista de Estudiantes ${curso}`,
      footer: 'hola',
      html: (
        <NoPaddingContainer>
          <TableStudentsGlobal />
        </NoPaddingContainer>
      ),
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'full-screen-popup',
        title: 'full-screen-title',
        confirmButton: 'full-screen-button',
        cancelButton: 'full-screen-button',
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',
      },
      didOpen: () => {
        const popup = MySwal.getPopup();
        if (popup) {
          popup.style.height = '100vh';
          popup.style.width = '100vw';
          const content = popup.querySelector('.full-screen-content');
          if (content) {
            content.style.marginTop = '0';
          }
        }
      },
    });
  };

  const menuOptions = [
    {
      label: 'Tabla',
      icon: 'table_view',
      action: showAlert,
    },
    {
      label: 'Informacion',
      icon: 'info',
      isLink: true,
      route: '/view_groups',
    },
  ];

  return (
    <>
      <MiniMenu
        options={menuOptions}
      />
    </>
  );
};
  export default ShowTableStudents;
