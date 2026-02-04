import React from 'react';
import AppRoutes from './Components/Routes/AppRoutes';
import { AuthProvider } from './Components/Context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
        <ToastContainer />
    </>
  );
}

export default App;
