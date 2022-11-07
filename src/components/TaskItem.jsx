import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

export const TaskItem = ({
  name,
  completed,
  setAsCompleted,
  setDeleteTask,
}) => {
  return (
    <li
      className={`taskItem taskItem${
        completed ? '--isCompleted' : '--notIsCompleted'
      }`}
    >
      <span className={`setTaskCheck`} onClick={setAsCompleted}>
        <BsCheckLg />
      </span>
      <span className={`titleTaskItem`}>{name}</span>
      <span className={`deleteTask`} onClick={setDeleteTask}>
        <ImCross />
      </span>
    </li>
  );
};
