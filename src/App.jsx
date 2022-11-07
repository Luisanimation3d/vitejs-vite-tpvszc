import './App.css';
import { useState } from 'react';
import { TaskContainer } from './components/TaskContainer';
import { CreateTaskForm } from './components/CreateTaskForm';

function App() {
  const tasks =
    localStorage.tasksApp == null ? [] : JSON.parse(localStorage.tasksApp);
  // const tasks = [
  //   {
  //     id: 1,
  //     name: 'Pasear al perro',
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     name: 'Alimentar al gato',
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'Practicar ReactJs',
  //     completed: false,
  //   },
  // ];
  const [tareas, setTareas] = useState(tasks);
  const [buscar, setBuscar] = useState('');
  const [inputCreate, setInputCreate] = useState('');
  const totalTareas = tareas.length;
  const completedTareas = tareas.filter(
    (tarea) => tarea.completed === true
  ).length;
  let searchFound = [];

  const completedTask = (id) => {
    const foundTask = tareas.findIndex((tarea) => tarea.id === id);
    const modifiedTasks = [...tareas];
    modifiedTasks[foundTask].completed = !modifiedTasks[foundTask].completed;
    setTareas(modifiedTasks);
    localStorage.tasksApp = JSON.stringify(modifiedTasks);
  };

  const deleteTask = (id) => {
    const foundTask = tareas.findIndex((tarea) => tarea.id === id);
    const modifiedTasks = [...tareas];
    modifiedTasks.splice(foundTask, 1);
    setTareas(modifiedTasks);
    localStorage.tasksApp = JSON.stringify(modifiedTasks);
  };

  const addTask = (name) => {
    const newTask = {
      id: tareas.length + 1,
      name,
      completed: false,
    };
    const copyTasks = [...tareas, newTask];
    setTareas(copyTasks);
    localStorage.tasksApp = JSON.stringify(copyTasks);
  };

  if (!buscar >= 1) {
    searchFound = tareas;
  } else {
    searchFound = tareas.filter((tarea) => {
      const currentTask = tarea.name.toLowerCase();
      const currentTypeSearch = buscar.toLowerCase();
      return currentTask.includes(currentTypeSearch);
    });
  }

  return (
    <div className={`container`}>
      <TaskContainer
        completedTareas={completedTareas}
        totalTareas={totalTareas}
        buscar={buscar}
        setBuscar={setBuscar}
        searchFound={searchFound}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
      <CreateTaskForm
        inputCreate={inputCreate}
        setInputCreate={setInputCreate}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
