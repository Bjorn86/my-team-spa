// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './AuthScreen.scss';

// IMPORT COMPONENTS
import AuthTitle from '../AuthTitle/AuthTitle.jsx';
import Form from '../Form/Form.jsx';

// AUTH SCREEN COMPONENT
function AuthScreen({
  authTitle,
  formName,
  onSubmit,
  buttonText,
  isFormValid,
  ...props
}) {
  return (
    <section className='auth-screen'>
      <AuthTitle authTitle={authTitle} />
      <Form
        formName={formName}
        onSubmit={onSubmit}
        buttonText={buttonText}
        isFormValid={isFormValid}
      >
        {props.children}
      </Form>
      {formName === 'registration' ? (
        <p className='auth-screen__text'>
          Уже зарегистрированы?{' '}
          <Link to='/signin' className='auth-screen__link hover-link'>
            Войти
          </Link>
        </p>
      ) : (
        <p className='auth-screen__text'>
          Ещё не зарегистрированы?{' '}
          <Link to='/signup' className='auth-screen__link hover-link'>
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export default AuthScreen;
