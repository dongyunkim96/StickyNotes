import type { Task } from '../types/task';

export function validateTask(task: Partial<Omit<Task, 'id' | 'createdAt'>>): string[] {
  const errors: string[] = [];
  if (!task.title || task.title.length < 2) errors.push('Title must be at least 2 characters.');
  if (!task.description || task.description.length < 5) errors.push('Description must be at least 5 characters.');
  if (!['todo', 'in-progress', 'done'].includes(task.status ?? '')) errors.push('Invalid status value.');
  if (task.dueDate && isNaN(Date.parse(task.dueDate))) errors.push('Due date is not valid.');
  return errors;
}
