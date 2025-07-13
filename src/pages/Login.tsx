import React from 'react';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Centered = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 2.5rem 2rem;
  border-radius: 24px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.12);
  text-align: center;
  min-width: 320px;
  max-width: 90vw;

  @media (max-width: 500px) {
    padding: 1.2rem 0.5rem;
    min-width: 90vw;
  }
`;

const UserName = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.7rem 2rem;
  margin-top: 1.3rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px 2px #fdabdd40;

  &:hover {
    filter: brightness(1.1);
  }
`;

const Login: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth();

  return (
    <Centered>
      <Card>
        <h2>Welcome to StickyTasks!</h2>
        {isAuthenticated ? (
          <>
            <UserName>{user?.name || user?.email}</UserName>
            <Button onClick={() => logout()}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Login with Auth0</Button>
        )}
      </Card>
    </Centered>
  );
};

export default Login;
