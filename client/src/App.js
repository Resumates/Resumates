import './App.css';
import React, { useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import GlobalStyle from './style/GlobalStyle';
import { AuthContext } from './components/common/context/auth-context';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <BrowserRouter>
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
