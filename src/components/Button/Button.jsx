// IMPORT STYLES
import './Button.scss';

// BUTTON COMPONENT
function Button({ buttonText, place }) {
  return (
    <button
      className={`button button_place_${place} hover-button`}
      type='button'
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  );
}

export default Button;
