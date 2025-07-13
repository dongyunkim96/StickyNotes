import React from 'react';
import type { Task } from '../../types/task';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.green};
  padding: 2rem 1.4rem 1.2rem 1.4rem;
  border-radius: 24px;
  box-shadow: 0 4px 18px #b6e3b273;
  max-width: 440px;
  margin: 2rem auto;
  font-size: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media (max-width: 600px) {
    padding: 1rem 0.4rem;
    max-width: 98vw;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.3em 0;
  font-size: 1.6rem;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 0.3em;
`;

const ButtonBar = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button<{ secondary?: boolean }>`
  background: ${({ theme, secondary }) => (secondary ? theme.accent : theme.primary)};
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  border: none;
  border-radius: 11px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${({ secondary }) =>
    secondary ? '0 2px 10px #fdabdd44' : '0 2px 10px #ffd96655'};

  &:hover {
    filter: brightness(1.08);
  }
`;

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskDetails: React.FC<Props> = ({ task, onEdit, onDelete }) => (
  <Card>
    <Title>{task.title}</Title>
    <div>
      <Label>Description:</Label>
      <div>{task.description}</div>
    </div>
    <div>
      <Label>Status:</Label>
      <div>{task.status}</div>
    </div>
    {task.dueDate && (
      <div>
        <Label>Due Date:</Label>
        <div>{new Date(task.dueDate).toLocaleDateString()}</div>
      </div>
    )}
    <ButtonBar>
      <Button onClick={onEdit}>Edit</Button>
      <Button secondary onClick={onDelete}>Delete</Button>
    </ButtonBar>
  </Card>
);

export default TaskDetails;
