import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleUpdate = () => {
    const updatedName = prompt('Update Task Name:', task.name);
    if (updatedName) {
      dispatch(updateTask(task.id, { name: updatedName }));
    }
  };

  return (
    <li>
      {task.name}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
