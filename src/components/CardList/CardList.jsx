// IMPORT PACKAGES
import { useEffect, useState } from 'react';

// IMPORT STYLES
import './CardList.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';

/* // IMPORT CONFIGS
import { CARDS_PARAMS_RENDER } from '../../utils/config'; */

// CARD LIST COMPONENT
function CardList({ cards, likedCards, cardsRenderParams, onLike, onDislike }) {
  // HOOKS
  const [cardsForRender, setCardsForRender] = useState([]);

  // RENDER CARDS DEPENDING
  useEffect(() => {
    if (cards.length) {
      const result = cards.filter((card, index) => {
        return index < cardsRenderParams.total;
      });
      setCardsForRender(result);
    }
  }, [cards, cardsRenderParams]);

  // HANDLER CLICK ON BUTTON MORE
  function handleClickOnButtonMore() {
    const start = cardsForRender.length;
    const end = start + cardsRenderParams.more;
    const count = cards.length - start;
    if (count > 0) {
      const additionalCards = cards.slice(start, end);
      setCardsForRender([...cardsForRender, ...additionalCards]);
    }
  }

  // HANDLER SAVED STATUS
  function handleLikedStatus(likedCards, userCard) {
    return likedCards.some((card) => {
      return card.id === userCard.id;
    });
  }

  return (
    <section className='card-list' aria-label='Секция с карточками сотрудников'>
      <>
        <ul className='card-list__list'>
          {cardsForRender.map((card) => (
            <Card
              card={card}
              key={card.id}
              isLiked={handleLikedStatus(likedCards, card)}
              onLike={onLike}
              onDislike={onDislike}
            />
          ))}
        </ul>
        {cardsForRender.length >= 4 && cardsForRender.length < cards.length && (
          <Button
            type='button'
            buttonText='Показать еще'
            place='card-list'
            onClick={handleClickOnButtonMore}
          />
        )}
      </>
    </section>
  );
}

export default CardList;
