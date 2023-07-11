// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './Card.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';

// CARD COMPONENT
function Card({ card, isLiked, onLike, onDislike }) {
  // HANDLER LIKE
  function handleLike() {
    onLike(card);
  }

  // HANDLER DISLIKE
  function handleDislike() {
    onDislike(card);
  }

  return (
    <li className='card'>
      <Link
        to={`${card.first_name.toLowerCase()}-${card.last_name.toLowerCase()}`}
        className='card__link hover-link'
      >
        <img
          className='card__img'
          src={card.avatar}
          alt={`${card.first_name} ${card.last_name}`}
        />
        <h2 className='card__title'>{`${card.first_name} ${card.last_name}`}</h2>
      </Link>
      <Button
        type='button'
        ariaLabel={isLiked ? 'Убрать лайк' : 'Поставить лайк'}
        place='card'
        isLiked={isLiked}
        onClick={isLiked ? handleDislike : handleLike}
      />
    </li>
  );
}

export default Card;
