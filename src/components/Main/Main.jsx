// IMPORT STYLES
import './Main.scss';

// IMPORT COMPONENTS
import CardList from '../CardList/CardList.jsx';

// MAIN COMPONENT
function Main({ cards, onLike, onDislike }) {
  return (
    <main className='main'>
      <CardList cards={cards} onLike={onLike} onDislike={onDislike} />
    </main>
  );
}

export default Main;
