import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import GlobalStyle from './style/GlobalStyle';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
