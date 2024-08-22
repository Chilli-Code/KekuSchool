import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AlertDelete = ({ id }) => {
  const MySwal = withReactContent(Swal);

  const showAlert = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: `You are about to delete the item with ID: ${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes manejar la lógica para eliminar el elemento
        console.log(`Deleting item with ID: ${id}`);
        MySwal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  };

  return (
    <button onClick={showAlert} className="button buttonDelete">
      <span className="icon">delete</span>
    </button>
  );
};

export default AlertDelete;