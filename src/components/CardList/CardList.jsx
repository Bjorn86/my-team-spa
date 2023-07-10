// IMPORT STYLES
import './CardList.scss';

// IMPORT COMPONENTS
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';

// CARD LIST COMPONENT
function CardList({ cards, onLike, onDislike }) {
  return (
    <section className='card-list' aria-label='Секция с карточками сотрудников'>
      <>
        <ul className='card-list__list'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card.id}
              onLike={onLike}
              onDislike={onDislike}
            />
          ))}
        </ul>
        <Button />
      </>
    </section>
  );
}

export default CardList;
