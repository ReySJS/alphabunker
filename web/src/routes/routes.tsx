import { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract';
import { Transfer } from '../pages/Transfer';
import { Deposit } from '../pages/Deposit';
import { Withdraw } from '../pages/Withdraw';
import { Profile } from '../pages/Profile';
import { Transaction } from '../pages/Transaction';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route
      path="/home"
      element={
        <Public>
          <Home />
        </Public>
      }
    />
    <Route
      path="/login"
      element={
        <Public>
          <Login />
        </Public>
      }
    />
    <Route
      path="/register"
      element={
        <Public>
          <Register />
        </Public>
      }
    />
    <Route
      path="/deposit"
      element={
        <Private>
          <Deposit />
        </Private>
      }
    />
    <Route
      path="/extract"
      element={
        <Private>
          <Extract />
        </Private>
      }
    />
    <Route
      path="/Transfer"
      element={
        <Private>
          <Transfer />
        </Private>
      }
    />
    <Route
      path="/withdraw"
      element={
        <Private>
          <Withdraw />
        </Private>
      }
    />
    <Route
      path="/profile"
      element={
        <Private>
          <Profile />
        </Private>
      }
    />
    <Route path="/transaction/:transactionId" element={<Transaction />} />

    <Route path="*" element={<h1 className="text-white">Error 404</h1>} />
  </Routes>
);
