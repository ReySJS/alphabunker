import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <BrowserRouter>{children}</BrowserRouter>
);
