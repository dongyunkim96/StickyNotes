import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/TaskList/TaskList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 0 1.5rem 0;
`;

const Header = styled.h1`
  margin-bottom: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: ${({ theme }) => theme.text};
  font-size: 2.4rem;
  letter-spacing: -1px;
`;

const AddButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.7rem 1.7rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px 2px #fdabdd40;

  &:hover {
    filter: brightness(1.08);
  }
`;

const Dashboard: React.FC = () => {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>My Tasks</Header>
      <AddButton onClick={() => navigate('/tasks/new')}>+ New Sticky</AddButton>
      <TaskList tasks={tasks} />
    </Wrapper>
  );
};

export default Dashboard;
