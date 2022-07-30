import './styles/global.css';
import { Home } from './pages/Home/index';
import { Router } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};
