import React from "react";
import Checkbox from "./Checkbox";
const TaskList = (props) => {
  const { list, setList } = props;

  const checkStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const removeItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const check = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={checkStatus} />
  ));
  return (
    <div className="todo-list">
      {list.length ? check : "No tasks"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={removeItem}>
            Eliminar tareas completadas
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
