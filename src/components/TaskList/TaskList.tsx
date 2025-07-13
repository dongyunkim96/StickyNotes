import React from 'react';
import type { Task } from '../../types/task';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = ['primary', 'secondary', 'blue', 'green', 'accent'];

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  padding: 0;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    max-width: 99vw;
    gap: 1rem;
  }
`;

const Note = styled.li<{ color: keyof typeof colors | string }>`
  background: ${({ theme, color }) => theme[color as keyof typeof theme]};
  border-radius: 16px 24px 20px 12px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.13);
  padding: 1.3rem 1.2rem 1rem 1.3rem;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.1s;

  &:hover {
    transform: rotate(-2deg) scale(1.03);
    box-shadow: 0 16px 44px rgba(0,0,0,0.17);
  }
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const Status = styled.div`
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 0.3rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 0.98rem;
  text-decoration: underline;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: none;
  }
`;

interface Props {
  tasks: Task[];
}

const Due = styled.div`
  font-size: 0.92rem;
  color: #cc426b;
  margin-bottom: 0.35rem;
`;

const TaskList: React.FC<Props> = ({ tasks }) => (
  <Grid>
    {tasks.map((task, i) => (
      <Note key={task.id} color={colors[i % colors.length]}>
        <div>
          <Title>{task.title}</Title>
          {task.dueDate && <Due>Due: {new Date(task.dueDate).toLocaleDateString()}</Due>}
          <Status>Status: {task.status}</Status>
        </div>
        <StyledLink to={`/tasks/${task.id}`}>View Details</StyledLink>
      </Note>
    ))}
  </Grid>
);

export default TaskList;
