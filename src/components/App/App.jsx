// IMPORT PACKAGES
import { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import AppLayout from '../AppLayout/AppLayout.jsx';
import Registration from '../Registration/Registration.jsx';
import Login from '../Login/Login.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Main from '../Main/Main.jsx';
import Preloader from '../Preloader/Preloader.jsx';

// IMPORT CONTEXT
import { CurrentUserContext } from '../../contexts/CurrentUserContext.jsx';

// IMPORT API'S
import * as api from '../../utils/api';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderStatus] = useState(true);
  const [initialCards, setInitialCards] = useState([]);
  const [likedCards, setLikedCards] = useState([]);
  const navigate = useNavigate();

  // HANDLER USER REGISTRATION
  async function handleUserRegistration({ email, password }) {
    setLoading(true);
    try {
      const userData = await api.register({ email, password });
      if (userData) {
        navigate('/signin', { replace: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // HANDLER USER AUTHORIZATION
  async function handleUserAuthorization({ email, password }) {
    setLoading(true);
    try {
      const userData = await api.authorize({ email, password });
      if (userData) {
        setLoggedIn(true);
        localStorage.setItem('token', userData.token);
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // HANDLER USER LOGOUT
  async function handleUserLogOut() {
    try {
      const data = await api.logout();
      if (data) {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate('/signin', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }

  // HANDLER USER LOGIN CHECK
  const handleUserLoginCheck = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userData = await api.getUserInfo(4);
        if (userData) {
          setLoggedIn(true);
          setCurrentUser(userData.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setPreloaderStatus(false);
      }
    } else {
      setPreloaderStatus(false);
    }
  }, []);

  // HANDLER GET ALL USERS INFO
  async function handleGetAllUsersInfo() {
    try {
      const usersData = await api.getAllUsersInfo();
      if (usersData) {
        setInitialCards(usersData.data);
        localStorage.setItem('cards', JSON.stringify(usersData.data));
      }
    } catch (err) {
      console.error(err);
    }
  }

  // HANDLER PUT LIKE
  async function handlePutLike(card) {
    try {
      const cardData = await api.changeLikeStatus(card.id);
      if (cardData) {
        setLikedCards([...likedCards, card]);
        localStorage.setItem(
          'likedCards',
          JSON.stringify([...likedCards, card]),
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  // HANDLER DELETE LIKE
  async function handleDeleteLike(card) {
    const like = likedCards.find((item) => item.id === card.id);
    try {
      const cardData = await api.changeLikeStatus(card.id);
      if (cardData) {
        setLikedCards((state) => state.filter((item) => item.id !== like.id));
        localStorage.setItem(
          'likedCards',
          JSON.stringify(likedCards.filter((item) => item.id !== like.id)),
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      console.log(likedCards);
    }
  }

  // CHECK USER LOGGED IN
  useEffect(() => {
    handleUserLoginCheck();
  }, [loggedIn, handleUserLoginCheck]);

  // GET ALL USER INFO
  useEffect(() => {
    if (loggedIn && !localStorage.getItem('cards')) {
      handleGetAllUsersInfo();
    } else if (loggedIn && localStorage.getItem('cards')) {
      setInitialCards(JSON.parse(localStorage.getItem('cards')));
      if (localStorage.getItem('likedCards')) {
        setLikedCards(JSON.parse(localStorage.getItem('likedCards')));
      }
    }
  }, [loggedIn]);

  return (
    <div className='app__content'>
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute
                  element={AppLayout}
                  loggedIn={loggedIn}
                  onLogout={handleUserLogOut}
                />
              }
            >
              <Route
                index
                element={
                  <Main
                    cards={initialCards}
                    likedCards={likedCards}
                    onLike={handlePutLike}
                    onDislike={handleDeleteLike}
                  />
                }
              />
            </Route>
            <Route
              path='/signup'
              element={
                <Registration
                  onRegistration={handleUserRegistration}
                  onLoading={isLoading}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  onLogin={handleUserAuthorization}
                  onLoading={isLoading}
                />
              }
            />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
