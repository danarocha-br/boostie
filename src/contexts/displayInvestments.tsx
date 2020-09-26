import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';

export type IDisplayState = boolean;

export type DisplayInvestmentContext = {
  displayInvestment: boolean;
  toggleDisplayInvestments(): void;
};

const DisplayInvestmentContext = createContext<DisplayInvestmentContext | null>(
  null,
);

export const DisplayInvestmentProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [displayInvestment, setDisplayInvesment] = useState(true);

  const toggleDisplayInvestments = useCallback(() => {
    setDisplayInvesment((prevState) => !prevState);
  }, []);

  const value = React.useMemo(
    () => ({
      displayInvestment,
      toggleDisplayInvestments,
    }),
    [displayInvestment, toggleDisplayInvestments],
  );

  return (
    <DisplayInvestmentContext.Provider value={value}>
      {children}
    </DisplayInvestmentContext.Provider>
  );
};

const useDisplayInvestments = (): DisplayInvestmentContext => {
  const context = useContext(DisplayInvestmentContext);

  if (!context) {
    throw new Error(
      `useDisplayInvestments must be used within an DisplayInvestmentProvider`,
    );
  }

  return context;
};

export default useDisplayInvestments;
