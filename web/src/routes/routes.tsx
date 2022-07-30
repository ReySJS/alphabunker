import { Route, Routes, Navigate } from 'react-router-dom';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<h1>Home</h1>} />
  </Routes>
);
