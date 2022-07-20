import { ReactNode, createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContextTypes {
  user: UserTypes;
  setUser: (user: UserTypes) => void;
  signIn: ({ cpf, password }: SignInTypes) => Promise<void>;
  loading: boolean;
}

export const UserContext = createContext<Partial<ContextTypes>>({});

interface UserProviderTypes {
  children: ReactNode;
}

interface UserTypes {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
}

interface SignInTypes {
  cpf: string;
  password: string;
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes>({
    name: 'string',
    email: 'string',
    cpf: 'string',
    birthDate: 'string',
  });

  const [loading, setLoading] = useState(true);

  const login = (userData: UserTypes) => {
    const userInfo = {
      name: userData.name,
      email: userData.email,
      cpf: userData.cpf,
      birthDate: userData.cpf,
    };

    setUser(userInfo);
    return true;
  };

  const signIn = async ({ cpf, password }: SignInTypes) => {
    setLoading(true);
    try {
      // login();
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
