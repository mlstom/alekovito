import React, { createContext, useContext,  useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [first, setFirst] = useState(0)
  return (
    <Context.Provider
      value={{
        first,
        setFirst
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);