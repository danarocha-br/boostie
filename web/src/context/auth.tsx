import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';

export type AuthState = {
  signed: boolean;
  // account: AccountData;
};

export type AuthContext = {
  signed: boolean;
  // account: AccountData;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContext | null>(null);

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};

export default useAuth;
