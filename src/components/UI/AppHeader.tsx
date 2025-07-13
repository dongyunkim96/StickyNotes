import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderBar = styled.header`
  width: 100vw;
  max-width: 100vw;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 10px 0 #ffd96652;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 2vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  @media (max-width: 600px) {
    height: 52px;
    padding: 0 1vw;
  }
`;

const HomeBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0 0.2em;
  gap: 0.3em;
  transition: filter 0.13s;

  &:hover {
    filter: brightness(0.95);
  }
`;

const Title = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5em;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  letter-spacing: -1px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Hide home button if already on dashboard
  const showHome = pathname !== '/';

  return (
    <HeaderBar>
      {showHome && (
        <HomeBtn
          aria-label="Go to Dashboard"
          title="Go to Dashboard"
          onClick={() => navigate('/')}
        >
          🏠
          <Title>Home</Title>
        </HomeBtn>
      )}
      <Spacer />
    </HeaderBar>
  );
};

export default AppHeader;
