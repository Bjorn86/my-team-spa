// IMPORT PACKAGES
import { useForm } from 'react-hook-form';
import isURL from 'validator/es/lib/isURL';

// IMPORT COMPONENTS
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';

// EDIT AVATAR POPUP COMPONENT
function EditAvatarPopup({ onEditAvatar, onLoading, isOpen, onClose }) {
  // HOOKS
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  // HANDLER SUBMIT
  function onSubmit(data) {
    onEditAvatar(data);
    reset({ url: '' });
  }

  return (
    <PopupWithForm
      formName='popup'
      onSubmit={handleSubmit(onSubmit)}
      buttonText={onLoading ? 'Редактирование...' : 'Редактировать'}
      isFormValid={isValid}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className='form__input-wrapper'>
        URL
        <input
          className={`form__input ${errors.url && 'form__input_style_error'}`}
          type='text'
          form='popup'
          disabled={onLoading ? true : false}
          {...register('url', {
            required: 'Поле должно быть заполнено',
            validate: (value) => {
              if (!isURL(value, { protocols: ['http', 'https'] })) {
                return 'Необходимо указать ссылку в правильном формате';
              }
            },
          })}
        />
        <span
          className={`form__input-error ${
            errors.url ? 'form__input-error_active' : ''
          }`}
        >
          {errors.url?.message}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
