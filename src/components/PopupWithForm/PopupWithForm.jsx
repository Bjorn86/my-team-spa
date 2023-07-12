// IMPORT COMPONENTS
import Popup from '../Popup/Popup.jsx';
import Form from '../Form/Form.jsx';

// POPUP WITH FORM COMPONENT
function PopupWithForm({
  formName,
  onSubmit,
  buttonText,
  isFormValid,
  isOpen,
  onClose,
  ...props
}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className='popup__title'>Изменить аватар</h2>
      <Form
        formName={formName}
        onSubmit={onSubmit}
        buttonText={buttonText}
        isFormValid={isFormValid}
      >
        {props.children}
      </Form>
    </Popup>
  );
}

export default PopupWithForm;
