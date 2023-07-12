// IMPORT PACKAGES
import { useState, useEffect } from 'react';
import useResizeScreen from '../../hooks/useResizeScreen.jsx';

// IMPORT COMPONENTS
import CardList from '../CardList/CardList.jsx';
import Main from '../Main/Main.jsx';

// IMPORT CONFIGS
import { CARDS_PARAMS_RENDER } from '../../utils/config';
import Header from '../Header/Header.jsx';

// MAIN COMPONENT
function HomePage({ cards, likedCards, onLike, onDislike, onLogout }) {
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
    <>
      <Header isDetailPage={false} onLogout={onLogout} />
      <Main>
        <CardList
          cards={cards}
          likedCards={likedCards}
          cardsRenderParams={cardsRenderParams}
          onLike={onLike}
          onDislike={onDislike}
        />
      </Main>
    </>
  );
}

export default HomePage;
