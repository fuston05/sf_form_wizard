import React, {useState} from 'react';

// styles
import './Modal.scss';

const Modal = (props) => {
  const [formsData, setFormsData]= useState({});
  const [showModal, setShowModal]= useState(true);

  return (
    <div className= 'modalComponent' data-testid='modalComponent'>

    </div>
  );
};

export default Modal;
