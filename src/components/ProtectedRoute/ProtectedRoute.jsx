import { Navigate } from 'react-router-dom';

// PROTECTED ROUTE COMPONENT
const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/signin' replace />
  );
};

export default ProtectedRoute;
