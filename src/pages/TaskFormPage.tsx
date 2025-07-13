import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm/TaskForm';

const TaskFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addTask, updateTask, getTask } = useTasks();
  const navigate = useNavigate();

  const isEdit = Boolean(id);
  const initial = isEdit ? getTask(id!) : undefined;

  const handleSubmit = (task: any) => {
    if (isEdit && id) {
      updateTask(id, task);
      navigate('/'); // Go to dashboard after edit
    } else {
      addTask(task);
      navigate('/'); // Go to dashboard after add
    }
  };

  const handleCancel = () => {
    navigate('/'); // Go to dashboard without saving
  };

  return (
    <div>
      <h1>{isEdit ? 'Edit Task' : 'Add New Task'}</h1>
      <TaskForm
        initial={initial}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText={isEdit ? 'Edit' : 'Add'}
      />
    </div>
  );
};

export default TaskFormPage;
