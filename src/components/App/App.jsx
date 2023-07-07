// IMPORT PACKAGES
import { Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import AppLayout from '../AppLayout/AppLayout.jsx';

// APP CORE COMPONENT
function App() {
  return (
    <div className='app__content'>
      <Routes>
        <Route path='/' element={<AppLayout />} />
      </Routes>
    </div>
  );
}

export default App;
