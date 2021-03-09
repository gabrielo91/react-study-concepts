import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function useAuthContext() {
  const state = useContext(AuthContext);

  return state;
}

export { useAuthContext };
