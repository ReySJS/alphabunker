import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Cadaster } from '../pages/Cadaster';
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile';
import { Transaction } from '../pages/Transaction';
import { Transfer } from '../pages/Transfer';
import { Withdraw } from '../pages/Withdraw';


export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={ <Home /> } />
    <Route path="/cadaster" element={ <Cadaster /> } />
    <Route path="/profile" element={ <Profile /> } />
    <Route path="/transaction" element={ <Transaction /> } />
    <Route path="/transfer" element={ <Transfer /> } />
    <Route path="/withdraw" element={ <Withdraw /> } />
    
    </Routes>
)