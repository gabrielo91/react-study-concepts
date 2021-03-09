import { createContext, useState } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const initialState = {
    name: 'Gabriel',
  };

  const [state, setState] = useState(initialState);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
