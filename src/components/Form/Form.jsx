// IMPORT STYLES
import './Form.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';

// FORM COMPONENT
function Form({ formName, onSubmit, buttonText, isFormValid, ...props }) {
  return (
    <form
      className={`form form_type_${formName}`} // TODO Посмотреть нужен ли класс с модификатором
      name={formName}
      id={formName}
      action='#'
      noValidate
      onSubmit={onSubmit}
    >
      {props.children}
      <Button buttonText={buttonText} place='form' isFormValid={isFormValid} />
    </form>
  );
}

export default Form;
