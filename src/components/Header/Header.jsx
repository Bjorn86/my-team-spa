// IMPORT STYLES
import './Header.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

// HEADER COMPONENT
function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Button buttonText={'Выход'} place='home' />
        <SectionTitle titleText='Наша команда' />
        <p className='header__text'>
          Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
          которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
          из&nbsp;любых, даже самых сложных ситуаций.
        </p>
      </div>
    </header>
  );
}

export default Header;