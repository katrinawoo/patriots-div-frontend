import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './SuccessPopup.scss';

const MySwal = withReactContent(Swal);

const SuccessPopup = ({ show, title, text }) => {
  MySwal.fire({
    position: 'center',
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 2000
  });

  return null;
};

export default SuccessPopup;