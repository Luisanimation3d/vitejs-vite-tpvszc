export const CreateTaskForm = ({ inputCreate, setInputCreate, addTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCreate.length >= 4) {
      addTask(inputCreate);
      setInputCreate('');
    }
  };
  const handleCreateInput = (e) => {
    setInputCreate(e.target.value);
  };
  return (
    <div className={`formContainer`}>
      <h2>Crea una nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Crear un ToDo en ReactJs"
          value={inputCreate}
          onChange={handleCreateInput}
        />
        <button>Crear Tarea</button>
      </form>
    </div>
  );
};
