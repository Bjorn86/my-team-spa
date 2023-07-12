// IMPORT STYLES
import './Button.scss';

// BUTTON COMPONENT
function Button({
  type,
  ariaLabel,
  buttonText,
  place,
  isShown,
  isLiked,
  isFormValid,
  onClick,
}) {
  return (
    <button
      className={`button button_place_${place} ${
        isShown ? 'button_action_shown-password' : ''
      } ${isLiked ? 'button_action_liked' : ''} ${
        place === 'avatar' ? '' : 'hover-button'
      }`}
      type={type}
      aria-label={ariaLabel ? ariaLabel : null}
      disabled={place === 'form' && !isFormValid ? true : false}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
