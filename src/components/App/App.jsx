// IMPORT PACKAGES
import { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import AppLayout from '../AppLayout/AppLayout.jsx';
import Registration from '../Registration/Registration.jsx';
import Login from '../Login/Login.jsx';

// IMPORT API'S
import * as api from '../../utils/api';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
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
        localStorage.clear();
        navigate('/signin', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }

  // HANDLER USER LOGIN CHECK
  const handleUserLoginCheck = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = await api.getUserInfo(); // TODO Установить контекст пользователя при логине и передавать его сюда
      if (userData && token) {
        setLoggedIn(true);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // CHECK USER LOGGED IN
  useEffect(() => {
    handleUserLoginCheck();
  }, [loggedIn, handleUserLoginCheck]);

  return (
    <div className='app__content'>
      <Routes>
        <Route path='/' element={<AppLayout />} />
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
            <Login onLogin={handleUserAuthorization} onLoading={isLoading} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
