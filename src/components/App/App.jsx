// IMPORT PACKAGES
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import AppLayout from '../AppLayout/AppLayout.jsx';
import Registration from '../Registration/Registration.jsx';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const [isLoading, setLoading] = useState(false);

  return (
    <div className='app__content'>
      <Routes>
        <Route path='/' element={<AppLayout />} />
        <Route
          path='/signup'
          element={<Registration onLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
