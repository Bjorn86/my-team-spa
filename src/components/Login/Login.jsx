// IMPORT PACKAGES
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';

// IMPORT STYLES
import './Login.scss';

// IMPORT COMPONENTS
import AuthScreen from '../AuthScreen/AuthScreen.jsx';
import Button from '../Button/Button.jsx';

// LOGIN COMPONENT
function Login({ onLogin, onLoading, loggedIn }) {
  // HOOKS
  const [isPasswordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  // HANDLER SUBMIT
  function onSubmit(data) {
    onLogin(data);
  }

  // HANDLER PASSWORD SHOWN CLICK
  function handlePasswordShownClick() {
    setPasswordShown(!isPasswordShown);
  }

  return loggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='login'>
      <AuthScreen
        authTitle='Вход'
        formName='login'
        onSubmit={handleSubmit(onSubmit)}
        buttonText={onLoading ? 'Вход...' : 'Войти'}
        isFormValid={isValid}
      >
        <label className='form__input-wrapper'>
          Электронная почта
          <input
            className={`form__input ${
              errors.email && 'form__input_style_error'
            }`}
            type='text'
            form='login'
            disabled={onLoading ? true : false}
            {...register('email', {
              required: 'Поле должно быть заполнено',
              validate: (value) => {
                if (!isEmail(value)) {
                  return 'Необходимо указать e-mail в формате name@domain.zone';
                }
              },
            })}
          />
          <span
            className={`form__input-error ${
              errors.email ? 'form__input-error_active' : ''
            }`}
          >
            {errors.email?.message}
          </span>
        </label>
        <label className='form__input-wrapper form__input-wrapper_type_password'>
          Пароль
          <input
            className={`form__input ${
              errors.password && 'form__input_style_error'
            }`}
            type={isPasswordShown ? 'text' : 'password'}
            form='login'
            disabled={onLoading ? true : false}
            {...register('password', {
              required: 'Поле должно быть заполнено',
              minLength: {
                value: 6,
                message: 'Минимальное количество символов: 6',
              },
              maxLength: {
                value: 20,
                message: 'Максимальное количество символов: 20',
              },
            })}
          />
          <Button
            type='button'
            ariaLabel='Показать пароль'
            place='input'
            isShown={isPasswordShown}
            onClick={handlePasswordShownClick}
          />
          <span
            className={`form__input-error ${
              errors.password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.password?.message}
          </span>
        </label>
      </AuthScreen>
    </main>
  );
}

export default Login;
