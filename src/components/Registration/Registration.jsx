// IMPORT PACKAGES
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';

// IMPORT STYLES
import './Registration.scss';

// IMPORT COMPONENTS
import AuthScreen from '../AuthScreen/AuthScreen.jsx';

// REGISTRATION COMPONENT
function Registration({ onLoading }) {
  // HOOKS
  const { values, errors, isFormValid, onChange } = useFormWithValidation();

  // HANDLER SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='registration'>
      <AuthScreen
        authTitle='Регистрация'
        formName='registration'
        onSubmit={handleSubmit}
        buttonText={onLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        isFormValid={isFormValid}
      >
        <label className='form__input-wrapper'>
          Имя
          <input
            className={`form__input ${
              errors.name && 'form__input_style_error'
            }`}
            type='text'
            name='name'
            form='registration'
            required
            minLength='2'
            maxLength='30'
            disabled={onLoading ? true : false}
            onChange={onChange}
            value={values.name || ''}
          />
          <span
            className={`form__input-error ${
              errors.name ? 'form__input-error_active' : ''
            }`}
          >
            {errors.name || ''}
          </span>
        </label>
        <label className='form__input-wrapper'>
          Электронная почта
          <input
            className={`form__input ${
              errors.email && 'form__input_style_error'
            }`}
            type='text'
            name='email'
            form='registration'
            required
            disabled={onLoading ? true : false}
            onChange={onChange}
            value={values.email || ''}
          />
          <span
            className={`form__input-error ${
              errors.email ? 'form__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className='form__input-wrapper'>
          Пароль
          <input
            className={`form__input ${
              errors.password && 'form__input_style_error'
            }`}
            type='password'
            name='password'
            form='registration'
            required
            minLength='6'
            maxLength='20'
            disabled={onLoading ? true : false}
            onChange={onChange}
            value={values.password || ''}
          />
          <span
            className={`form__input-error ${
              errors.password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
        <label className='form__input-wrapper'>
          Подтвердите пароль
          <input
            className={`form__input ${
              errors.repeat_password && 'form__input_style_error'
            }`}
            type='password'
            name='repeat_password'
            form='registration'
            required
            minLength='6'
            maxLength='20'
            disabled={onLoading ? true : false}
            onChange={onChange}
            value={values.repeat_password || ''}
          />
          <span
            className={`form__input-error ${
              errors.repeat_password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.repeat_password || ''}
          </span>
        </label>
      </AuthScreen>
    </main>
  );
}

export default Registration;
