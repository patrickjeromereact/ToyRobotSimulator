import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Popup = ({
  isOpen,
  onModalClose,
  showCloseIcon = false,
  isAlertType = false,
  modalMessage,
  header,
  modalCtrCls
}) => {
  const renderAlertMessage = () => (
    <div className={'modal-container'}>
        <div className='header'>{header}</div><br/>
      <div className={'alert-message'}>{modalMessage}</div>
    </div>
  );

  const renderModalView = () => {
    return (
      <Modal
        open={isOpen}
        onClose={onModalClose}
        showCloseIcon={showCloseIcon}
        styles={{
            overlay: {
              background: 'rgba(0, 0, 0, 0.5)'
            },
            modal: {
              borderRadius: 5,
              maxWidth: '100%',
              width: '200px',
              boxShadow: '0px 3px 6px 0 rgba(0, 0, 0, 0.16)',
              textAlign: !isAlertType ? 'center' : ''
            }
          }}
        center
        closeOnEsc={true}
        closeOnOverlayClick={true}
        classNames={{
            modal : modalCtrCls
        }}
      >
        {renderAlertMessage()}
      </Modal>
    );
  };

  return (
    <>
      {renderModalView()}
    </>
  );
};

export default Popup;
