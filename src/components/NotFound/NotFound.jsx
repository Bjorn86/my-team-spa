// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './NotFound.scss';

// IMPORT COMPONENTS
import Main from '../Main/Main.jsx';

// NOT FOUND COMPONENT
function NotFound() {
  return (
    <Main>
      <section className='not-found'>
        <p className='not-found__title'>404</p>
        <h1 className='not-found__text'>Страница не найдена</h1>
        <Link to='/' className='not-found__link hover-link'>
          Вернутся на главную
        </Link>
      </section>
    </Main>
  );
}

export default NotFound;
