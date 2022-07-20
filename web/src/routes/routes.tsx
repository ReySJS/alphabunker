import { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract';
import { Transfer } from '../pages/Transfer';
import { Deposit } from '../pages/Deposit';
import { Withdraw } from '../pages/Withdraw';
import { Profile } from '../pages/Profile';

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const { user, loading } = useUser();

  if (!user) {
    return <Navigate to="/home" />;
  }

  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/profile" />;
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
      path="/profile"
      element={
        <Private>
          <Profile />
        </Private>
      }
    />
    <Route path="*" element={<h1 className="text-white">Error 404</h1>} />
  </Routes>
);
