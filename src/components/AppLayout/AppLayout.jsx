// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';

// APP LAYOUT COMPONENT
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
