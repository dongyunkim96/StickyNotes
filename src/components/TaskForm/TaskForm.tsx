import React, { useState } from 'react';
import type { Task } from '../../types/task';
import styled from 'styled-components';
import { validateTask } from '../../utils/validation';

const FormWrapper = styled.form`
  background: ${({ theme }) => theme.blue};
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  border-radius: 22px;
  box-shadow: 0 4px 16px 4px #cfe2ff80;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  font-size: 1.09rem;

  @media (max-width: 600px) {
    padding: 1.1rem 0.2rem 0.6rem 0.2rem;
    max-width: 99vw;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  background: #fffbe8;
`;

const Select = styled.select`
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  background: #fffbe8;
  font-size: 1.1rem;
`;

const ErrorBox = styled.div`
  color: #e11d48;
  margin-bottom: 0.6rem;
`;

const ButtonBar = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
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
  initial?: Partial<Task>;
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
  submitText?: string;
}

const statusList = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const TaskForm: React.FC<Props> = ({
  initial = {},
  onSubmit,
  onCancel,
  submitText = 'Save',
}) => {
  const [title, setTitle] = useState(initial.title || '');
  const [description, setDescription] = useState(initial.description || '');
  const [status, setStatus] = useState<Task['status']>(initial.status || 'todo');
  const [dueDate, setDueDate] = useState(initial.dueDate || '');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTask({ title, description, status, dueDate });
    if (validation.length > 0) {
      setErrors(validation);
      return;
    }
    onSubmit({ title, description, status, dueDate });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ErrorBox>
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </ErrorBox>
      )}
      <Field>
        <Label>Title:</Label>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
        />
      </Field>
      <Field>
        <Label>Description:</Label>
        <Input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe your task"
        />
      </Field>
      <Field>
        <Label>Status:</Label>
        <Select
          value={status}
          onChange={e => setStatus(e.target.value as Task['status'])}
        >
          {statusList.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </Select>
      </Field>
      <Field>
        <Label>Due Date:</Label>
        <Input
          type="date"
          value={dueDate ? dueDate.slice(0, 10) : ''}
          onChange={e => setDueDate(e.target.value)}
        />
      </Field>
      <ButtonBar>
        <Button type="submit">{submitText}</Button>
        <Button type="button" secondary onClick={onCancel}>
          Cancel
        </Button>
      </ButtonBar>
    </FormWrapper>
  );
};

export default TaskForm;
