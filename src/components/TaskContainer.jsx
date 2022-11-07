import { TitleTask } from './TitleTask';
import { SearchBar } from './SearchBar';
import { ListContainer } from './ListContainer';
import { TaskItem } from './TaskItem';

export const TaskContainer = ({
  completedTareas,
  totalTareas,
  buscar,
  setBuscar,
  searchFound,
  completedTask,
  deleteTask,
}) => {
  return (
    <div className={`TaskContainer`}>
      <TitleTask completedTasks={completedTareas} totalTasks={totalTareas} />
      <SearchBar buscar={buscar} setBuscar={setBuscar} />
      {searchFound.length > 0 ? (
        <ListContainer>
          {searchFound.map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              completed={task.completed}
              setAsCompleted={() => completedTask(task.id)}
              setDeleteTask={() => deleteTask(task.id)}
            />
          ))}
        </ListContainer>
      ) : (
        <span className={`emptyTasks`}>
          No existe ninguna tarea
          <span>¡Crea una!</span>
        </span>
      )}
    </div>
  );
};
