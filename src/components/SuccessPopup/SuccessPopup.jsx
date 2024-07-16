import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './SuccessPopup.scss';
import { useEffect } from 'react';


const MySwal = withReactContent(Swal);

const SuccessPopup = ({ show, title, text }) => {
  useEffect(() => {
    if (show) {
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: title,
        text: text,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-swal-button'
        },
        willClose: () => {
          window.location.href = '/';
        }
      });
    }
    }, [show, title, text]);

  return null;
};

export default SuccessPopup;