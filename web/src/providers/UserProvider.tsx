import { ReactNode, createContext, useState, useContext, useEffect } from 'react';
import { api } from '../libs/api';

interface ContextTypes {
  user: UserTypes;
  account: AccountTypes;
  loading: boolean;
  signup?: (value: { name: string; email: string; cpf: string; birthdate: string; password: string }) => void;
  logout?: () => void;
}

interface LoginTypes {
  cpf: string
  password: string
}

interface SignUpTypes {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  password: string;
}

interface UserTypes {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
}

interface AccountTypes {
  accountNumber: number;
  accountVerificationCode: number;
  agencyNumber: number;
  agencyVerificationCode: number;
  balance: number;
}

export const UserContext = createContext<Partial<ContextTypes>>({});

interface UserProviderTypes {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes>({
    name: 'string',
    email: 'string',
    cpf: 'string',
    birthdate: 'string'
  });
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<AccountTypes>({
    accountNumber: 0,
    accountVerificationCode: 0,
    agencyNumber: 0,
    agencyVerificationCode: 0,
    balance: 0
  });

  /* const login = ({ cpf, password }: LoginTypes) => {

  };

  const logout = () => {

  }; */

  const signup = async ({name, email, cpf, birthdate, password}: SignUpTypes) => {
    const body = {
      name: name,
      email: email,
      cpf: cpf,
      birthdate: birthdate,
      password: password
    };
    console.log(body);
    try {
      const response = await api.post('/accounts', body);
      if (response.data) {
        setUser({name, email, cpf, birthdate});
        localStorage.setItem('user', JSON.stringify({name, email, cpf, birthdate}));
        setAccount(response.data.data);
      }
      // console.log(account);
    } catch (error: any) {
      console.log(error.response.data);
    }

  };

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    console.log(getUser);
    if (getUser && getUser !== null) {
      const loggedUser = JSON.parse(getUser);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        account,
        loading,
        signup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
