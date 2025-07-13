import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskDetails from '../components/TaskDetails/TaskDetails';

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  if (!id) return <div>Invalid access.</div>;
  const task = getTask(id);
  if (!task) return <div>Task not found.</div>;

  return (
    <div>
      <TaskDetails
        task={task}
        onEdit={() => navigate(`/tasks/${id}/edit`)}
        onDelete={() => {
          deleteTask(id);
          navigate('/');
        }}
      />
    </div>
  );
};

export default TaskDetailsPage;
