import React, { useContext } from 'react';

export const ActiveViewContext = React.createContext({});

export function ActiveViewProvider(
  props: React.PropsWithChildren<{ active: string }>,
) {
  const { children, active } = props;

  return (
    <ActiveViewContext.Provider value={active}>
      {children}
    </ActiveViewContext.Provider>
  );
}

export const useIsMobileContext = () => useContext(ActiveViewContext);
