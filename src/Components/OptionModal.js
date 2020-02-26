import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = props => {
  const handleClose = () => {
    props.handleCloseModal();
  };
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected option"
      onRequestClose={handleClose}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={handleClose}>
        Close
      </button>
    </Modal>
  );
};

export default OptionModal;
