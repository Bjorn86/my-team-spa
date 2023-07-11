// IMPORT PACKAGES
import { useState, useEffect } from 'react';
import useResizeScreen from '../../hooks/useResizeScreen.jsx';

// IMPORT STYLES
import './Main.scss';

// IMPORT COMPONENTS
import CardList from '../CardList/CardList.jsx';

// IMPORT CONFIGS
import { CARDS_PARAMS_RENDER } from '../../utils/config';

// MAIN COMPONENT
function Main({ cards, likedCards, onLike, onDislike }) {
  // HOOKS
  const [cardsRenderParams, setCardsRenderParams] = useState({});
  const screenWidth = useResizeScreen();

  // SET THE CARD RENDER PARAMETERS DEPENDING ON THE SCREEN WIDTH
  useEffect(() => {
    if (screenWidth >= CARDS_PARAMS_RENDER.base.width) {
      setCardsRenderParams(CARDS_PARAMS_RENDER.base.cards);
    } else if (
      screenWidth < CARDS_PARAMS_RENDER.base.width &&
      screenWidth >= CARDS_PARAMS_RENDER.desktop.width
    ) {
      setCardsRenderParams(CARDS_PARAMS_RENDER.desktop.cards);
    } else if (
      screenWidth < CARDS_PARAMS_RENDER.desktop.width &&
      screenWidth >= CARDS_PARAMS_RENDER.tablet.width
    ) {
      setCardsRenderParams(CARDS_PARAMS_RENDER.tablet.cards);
    } else {
      setCardsRenderParams(CARDS_PARAMS_RENDER.mobile.cards);
    }
  }, [screenWidth]);

  return (
    <main className='main'>
      <CardList
        cards={cards}
        likedCards={likedCards}
        cardsRenderParams={cardsRenderParams}
        onLike={onLike}
        onDislike={onDislike}
      />
    </main>
  );
}

export default Main;
