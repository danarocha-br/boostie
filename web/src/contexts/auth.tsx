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
  investments: IAccountData;
  displayInvestment: boolean;
};

export type IAuthContext = {
  signed: boolean;
  investments: IAccountData;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = useState<IAuthState>(() => {
    const storedUser = localStorage.getItem(storageKey('user'));

    if (storedUser) {
      const userName = JSON.parse(storedUser);

      return {
        signed: true,
        investments: generateFinancialData(userName),
        displayInvestment: true,
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback((name) => {
    localStorage.setItem(storageKey('user'), JSON.stringify(name));
    setData({
      signed: true,
      investments: generateFinancialData(name),
      displayInvestment: true,
    });
  }, []);

  const signOut = useCallback(() => {
    setData({} as IAuthState);
    localStorage.removeItem(storageKey('user'));
  }, []);

  const value = React.useMemo(
    () => ({
      signed: data.signed,
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
