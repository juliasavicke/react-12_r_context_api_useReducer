import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  userEmail: '',
  isUserLoggedIn: false,
});
AuthContext.displayName = 'AuthContext';

export default AuthContext;
