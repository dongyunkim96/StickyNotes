import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskDetailsPage from './pages/TaskDetailsPage';
import TaskFormPage from './pages/TaskFormPage';
import Login from './pages/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { useAuth0 } from '@auth0/auth0-react';
import AppHeader from './components/UI/AppHeader';
import styled from 'styled-components';


const PageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};

  @media (max-width: 600px) {
    padding-top: 64px;
  }
`;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return null; 

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <AppHeader />
          <PageWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasks/new"
                element={
                  <ProtectedRoute>
                    <TaskFormPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasks/:id"
                element={
                  <ProtectedRoute>
                    <TaskDetailsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasks/:id/edit"
                element={
                  <ProtectedRoute>
                    <TaskFormPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
