export const TitleTask = ({ completedTasks, totalTasks }) => (
  <h1 className={`titleTask`}>
    Has completado {completedTasks} de {totalTasks} tareas
  </h1>
);
