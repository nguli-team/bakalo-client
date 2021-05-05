import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return ReactDOM.createPortal(
    <button
      type="button"
      style={{
        backgroundColor: '#00000080',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onBackdropClick}
    >
      <button type="button" onClick={(e) => e.stopPropagation()}>
        {children}
      </button>
    </button>,
    // eslint-disable-next-line
    document.getElementById('modal-root')!
  );
};
export default Modal;
