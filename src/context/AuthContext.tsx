import React, { createContext, useContext } from 'react';
import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';

interface AuthContextType {
  isAuthenticated: boolean;
  user?: User;
  loginWithRedirect: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Auth0Provider
    domain="dev-fsq8ja2mhzg7j7pw.us.auth0.com"
    clientId="OhOAnSVwg7z3OJZ0stFrPJX7uwHen3YB"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <AuthInternalProvider>{children}</AuthInternalProvider>
  </Auth0Provider>
);

const AuthInternalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loginWithRedirect, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
