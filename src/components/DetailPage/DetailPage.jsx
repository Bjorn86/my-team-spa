// IMPORT PACKAGES
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// IMPORT STYLES
import './DetailPage.scss';

// IMPORT COMPONENTS
import Preloader from '../Preloader/Preloader.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import NotFound from '../NotFound/NotFound.jsx';

// DETAIL PAGE COMPONENT
function DetailPage({ cards, onLogout, onEditAvatar }) {
  // HOOKS
  const [card, setCard] = useState(null);
  const [isPreloaderActive, setPreloaderClass] = useState(true);
  const { userId } = useParams();

  // SET CARD STATE WHEN MOUNTING
  useEffect(() => {
    setCard(null);
    const findCard = cards.find((item) => item.id === +userId);
    if (findCard) {
      setCard(findCard);
      setPreloaderClass(false);
    } else {
      setPreloaderClass(false);
    }
  }, [cards, userId]);

  // PRELOADER AND NOT FOUND RENDER
  if (isPreloaderActive) {
    return <Preloader />;
  } else if (!card && !isPreloaderActive) {
    return <NotFound />;
  }

  return (
    <>
      <Header
        card={card}
        isDetailPage={true}
        onLogout={onLogout}
        onEditAvatar={onEditAvatar}
      />
      <Main>
        <section className='detail-page'>
          <article className='detail-page__info-wrapper'>
            <div className='detail-page__text-wrapper'>
              <p className='detail-page__text'>
                Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки
                комплексных решений финансовых продуктов, включая такие аспекты,
                как организационная структура, процессы, аналитика
                и&nbsp;ИТ-компоненты. Он&nbsp;помогает клиентам лучше понимать
                структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет
                применения новейших технологий и&nbsp;увеличивать продажи,
                используя самые современные аналитические инструменты.
              </p>
              <p className='detail-page__text'>
                В&nbsp;работе с&nbsp;клиентами недостаточно просто решить
                конкретную проблему или помочь справиться с&nbsp;трудностями.
                Не&nbsp;менее важно уделять внимание обмену знаниями:
                &laquo;Один из&nbsp;самых позитивных моментов&nbsp;&mdash; это
                осознание того, что ты&nbsp;помог клиенту перейти
                на&nbsp;совершенно новый уровень компетентности, уверенность
                в&nbsp;том, что после окончания проекта у&nbsp;клиента есть все
                необходимое, чтобы дальше развиваться самостоятельно&raquo;.
              </p>
              <p className='detail-page__text'>
                Помимо разнообразных проектов для клиентов финансового сектора,
                Сорин ведет активную предпринимательскую деятельность.
                Он&nbsp;является совладельцем сети клиник эстетической медицины
                в&nbsp;Швейцарии, предлагающей инновационный подход
                к&nbsp;красоте, а&nbsp;также инвестором других бизнес-проектов.
              </p>
            </div>
            <ul className='detail-page__contacts-wrapper'>
              <li className='detail-page__contacts-item detail-page__contacts-item_type_telephone'>
                <a
                  href='tel:+79543334455'
                  className='detail-page__link hover-link'
                >
                  +7 (954) 333-44-55
                </a>
              </li>
              <li className='detail-page__contacts-item detail-page__contacts-item_type_email'>
                <a
                  href={`mailto:${card.email}`}
                  className='detail-page__link hover-link'
                >
                  {card.email}
                </a>
              </li>
            </ul>
          </article>
        </section>
      </Main>
    </>
  );
}

export default DetailPage;
