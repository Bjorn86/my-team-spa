// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';

// APP LAYOUT COMPONENT
function AppLayout({ onLogout }) {
  return (
    <>
      <Header onLogout={onLogout} />
      <Outlet />
    </>
  );
}

export default AppLayout;
