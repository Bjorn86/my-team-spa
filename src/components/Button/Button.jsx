// IMPORT STYLES
import './Button.scss';

// BUTTON COMPONENT
function Button({ buttonText, place, isFormValid }) {
  return (
    <button
      className={`button button_place_${place} hover-button`}
      type='button'
      aria-label={buttonText} // TODO Подумать как не передавать атрибут при наличии текста в кнопке
      disabled={place === 'form' && !isFormValid ? true : false}
    >
      {buttonText}
    </button>
  );
}

export default Button;
