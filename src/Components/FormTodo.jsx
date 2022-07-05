import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    console.log(description);
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="" disabled={description ? "" : "disabled"}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
