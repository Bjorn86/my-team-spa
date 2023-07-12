// IMPORT PACKAGES
import { useEffect } from 'react';

// IMPORT STYLES
import './Popup.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';

// IMPORT VARIABLES
import { ESC_BTN } from '../../utils/constants';

// POPUP COMPONENT
function Popup({ isOpen, onClose, ...props }) {
  // HANDLE CLOSE POPUP BY ESC BUTTON
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === ESC_BTN) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
      return () => document.removeEventListener('keydown', handleEscClose);
    }
  }, [onClose, isOpen]);

  function closeByClickOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onMouseDown={closeByClickOnOverlay}
    >
      <div className='popup__container'>
        {props.children}
        <Button
          type='button'
          ariaLabel='Закрыть окно'
          place='popup'
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Popup;
