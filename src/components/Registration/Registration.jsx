// IMPORT PACKAGES
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';

// IMPORT STYLES
import './Registration.scss';

// IMPORT COMPONENTS
import AuthScreen from '../AuthScreen/AuthScreen.jsx';
import Button from '../Button/Button.jsx';

// REGISTRATION COMPONENT
function Registration({ onRegistration, onLoading, loggedIn }) {
  // HOOKS
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const password = watch('password');

  // HANDLER SUBMIT
  function onSubmit(data) {
    onRegistration(data);
  }

  // HANDLER PASSWORD SHOWN CLICK
  function handlePasswordShownClick() {
    setPasswordShown(!isPasswordShown);
  }

  // HANDLER CONFIRM PASSWORD SHOWN CLICK
  function handleConfirmPasswordShownClick() {
    setConfirmPasswordShown(!isConfirmPasswordShown);
  }

  // TRACKING PASSWORD COMPLIANCE
  useEffect(() => {
    if (password) {
      trigger('confirmPassword');
    }
  }, [password, trigger]);

  return loggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='registration'>
      <AuthScreen
        authTitle='Регистрация'
        formName='registration'
        onSubmit={handleSubmit(onSubmit)}
        buttonText={onLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        isFormValid={isValid}
      >
        <label className='form__input-wrapper'>
          Имя
          <input
            className={`form__input ${
              errors.name && 'form__input_style_error'
            }`}
            type='text'
            form='registration'
            disabled={onLoading ? true : false}
            {...register('name', {
              required: 'Поле должно быть заполнено',
              minLength: {
                value: 2,
                message: 'Минимальное количество символов: 2',
              },
              maxLength: {
                value: 30,
                message: 'Максимальное количество символов: 30',
              },
            })}
          />
          <span
            className={`form__input-error ${
              errors.name ? 'form__input-error_active' : ''
            }`}
          >
            {errors.name?.message}
          </span>
        </label>
        <label className='form__input-wrapper'>
          Электронная почта
          <input
            className={`form__input ${
              errors.email && 'form__input_style_error'
            }`}
            type='text'
            form='registration'
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
            form='registration'
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
        <label className='form__input-wrapper form__input-wrapper_type_password'>
          Подтвердите пароль
          <input
            className={`form__input ${
              errors.confirmPassword && 'form__input_style_error'
            }`}
            type={isConfirmPasswordShown ? 'text' : 'password'}
            form='registration'
            disabled={onLoading ? true : false}
            {...register('confirmPassword', {
              validate: (value) => {
                if (watch('password') !== value) {
                  return 'Пароли не совпадают';
                }
              },
            })}
          />
          <Button
            type='button'
            ariaLabel='Показать пароль'
            place='input'
            isShown={isConfirmPasswordShown}
            onClick={handleConfirmPasswordShownClick}
          />
          <span
            className={`form__input-error ${
              errors.confirmPassword ? 'form__input-error_active' : ''
            }`}
          >
            {errors.confirmPassword?.message}
          </span>
        </label>
      </AuthScreen>
    </main>
  );
}

export default Registration;
