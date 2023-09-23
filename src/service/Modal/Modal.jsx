import { createPortal } from 'react-dom';

export default function Modal({ alt, src, closeModal }) {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div
      onClick={closeModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1200,
      }}
    >
      <img src={src.large} alt={alt} />;
    </div>,
    modalRoot
  );
}
