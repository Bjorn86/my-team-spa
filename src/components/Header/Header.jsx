// IMPORT PACKAGES
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// IMPORT STYLES
import './Header.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

// IMPORT CONTEXT
import { CurrentUserContext } from '../../contexts/CurrentUserContext.jsx';

// HEADER COMPONENT
function Header({ card, isDetailPage, onLogout, onEditAvatar }) {
  // HOOKS
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  // HANDLE BUTTON BACK CLICK
  const handleBtnBackClick = useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <header className='header'>
      {isDetailPage ? (
        <div className='header__wrapper header__wrapper_place_detail-page'>
          <Button
            type='button'
            buttonText='Назад'
            place='detail-page-back'
            onClick={handleBtnBackClick}
          />
          <div className='header__info-wrapper'>
            {card.id === currentUser.id ? (
              <Button
                type='button'
                buttonText={
                  <img
                    src={currentUser.avatar}
                    alt={`${currentUser.first_name} ${currentUser.last_name}`}
                    className='header__img'
                  />
                }
                ariaLabel='Редактировать аватар'
                place='avatar'
                onClick={onEditAvatar}
              />
            ) : (
              <img
                src={card.avatar}
                alt={`${card.first_name} ${card.last_name}`}
                className='header__img'
              />
            )}
            <div className='header__text-wrapper'>
              <SectionTitle
                titleText={`${card.first_name} ${card.last_name}`}
              />
              <p className='header__subtitle'>Партнер</p>
            </div>
          </div>
          <Button
            type='button'
            buttonText='Выход'
            place='detail-page-exit'
            onClick={onLogout}
          />
        </div>
      ) : (
        <div className='header__wrapper header__wrapper_place_home'>
          <Button
            type='button'
            buttonText='Выход'
            place='home'
            onClick={onLogout}
          />
          <SectionTitle titleText='Наша команда' />
          <p className='header__text'>
            Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
            которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
            из&nbsp;любых, даже самых сложных ситуаций.
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
