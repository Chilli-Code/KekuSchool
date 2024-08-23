import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import withReactContent from 'sweetalert2-react-content';
import TableStudentsGlobal from './TableStudentsGroups.jsx';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
          content: 'full-screen-content',
          confirmButton: 'full-screen-button',
          cancelButton: 'full-screen-button',
        },
        showClass: {
          popup:'animate__animated animate__fadeInDown',
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
  const menuRef = useRef(null); // Referencia al menú
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ButtonTable
      className="icon"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        more_horiz
      </ButtonTable>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        ref={menuRef}
      >
        <MenuItem onClick={() => { showAlert(); handleClose(); }}><span className="icon">table_view</span>Tabla</MenuItem>
        <MenuItem onClick={handleClose}><span className="icon">info</span>Info</MenuItem>
      </Menu>
    </>

    // <ButtonTable onClick={showAlert} className="icon">
    //   more_horiz
    // </ButtonTable>
  );
};

export default ShowTableStudents;
