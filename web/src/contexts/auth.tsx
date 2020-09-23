import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';

import { storageKey, generateFinancialData } from '~/utils';
import { IAccountData } from '~/utils/generateFinancialData';

export type IAuthState = {
  signed: boolean;
  isLoading: boolean;
  investments: IAccountData;
};

export type IAuthContext = {
  signed: boolean;
  isLoading: boolean;
  investments: IAccountData;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<IAuthState>(() => {
    const storedUser = localStorage.getItem(storageKey('user'));

    if (storedUser) {
      const userName = JSON.parse(storedUser);

      return {
        isLoading: false,
        signed: true,
        investments: generateFinancialData(userName),
        displayInvestment: true,
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback((name) => {
    localStorage.setItem(storageKey('user'), JSON.stringify(name));

    setTimeout(() => {
      setLoading(false);
      setData({
        isLoading: isLoading,
        signed: true,
        investments: generateFinancialData(name),
      });
    }, 10000);
  }, []);

  const signOut = useCallback(() => {
    setData({} as IAuthState);
    localStorage.removeItem(storageKey('user'));
  }, []);

  const value = React.useMemo(
    () => ({
      signed: data.signed,
      isLoading: data.isLoading,
      investments: data.investments,
      signIn,
      signOut,
    }),
    [data, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};

export default useAuth;
